// Local dev server — serves static files + API routes
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = 3000;

// Load .env
const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) {
  fs.readFileSync(envPath, 'utf8').split('\n').forEach(line => {
    const [key, ...val] = line.split('=');
    if (key && val.length) process.env[key.trim()] = val.join('=').trim();
  });
}

// Import API handlers
const dictateHandler = require('./api/dictate');
const summarizeHandler = require('./api/summarize');
const appointmentAgentHandler = require('./api/appointment-agent');
const sendNotificationHandler = require('./api/send-notification');

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.wav': 'audio/wav',
  '.mp3': 'audio/mpeg',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
};

const server = http.createServer(async (req, res) => {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  // API routes
  if (req.url === '/api/dictate' && req.method === 'POST') {
    return handleAPI(req, res, dictateHandler);
  }
  if (req.url === '/api/summarize' && req.method === 'POST') {
    return handleAPI(req, res, summarizeHandler);
  }
  if (req.url === '/api/appointment-agent' && req.method === 'POST') {
    return handleAPI(req, res, appointmentAgentHandler);
  }
  if (req.url === '/api/send-notification' && req.method === 'POST') {
    return handleAPI(req, res, sendNotificationHandler);
  }

  // Static files — strip query string
  const pathname = url.parse(req.url).pathname;
  let filePath = path.join(__dirname, pathname === '/' ? 'index.html' : pathname);
  const ext = path.extname(filePath);
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  try {
    const data = fs.readFileSync(filePath);
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  } catch (e) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

function handleAPI(req, res, handler) {
  let body = '';
  req.on('data', chunk => { body += chunk; });
  req.on('end', async () => {
    try {
      req.body = JSON.parse(body);
    } catch (e) {
      req.body = {};
    }

    // Create mock Vercel-style res object
    const mockRes = {
      statusCode: 200,
      headers: {},
      setHeader(k, v) { this.headers[k] = v; },
      status(code) { this.statusCode = code; return this; },
      json(data) {
        res.writeHead(this.statusCode, {
          'Content-Type': 'application/json',
          ...this.headers
        });
        res.end(JSON.stringify(data));
      }
    };

    await handler(req, mockRes);
  });
}

server.listen(PORT, () => {
  console.log(`Meddo dev server running at http://localhost:${PORT}`);
  console.log(`API key loaded: ${process.env.SARVAM_API_KEY ? 'Yes' : 'No'}`);
});

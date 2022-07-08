import http from 'http';
import { URL } from 'url';
import fs from 'fs/promises';
import 'dotenv/config';

const port = process.env.PORT;

http
  .createServer(async (req, res) => {
    if (req.url === '/favicon.ico') {
      res.end();

      return;
    }

    const reqUrl = new URL(
      req.url,
      req.protocol + '://' + req.headers.host + '/'
    );

    switch (reqUrl.pathname) {
      case '/':
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(await fs.readFile('./pages/index.html'));
        break;
      case '/about':
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(await fs.readFile('./pages/about.html'));
        break;
      case '/contact-me':
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(await fs.readFile('./pages/contact-me.html'));
        break;
      default:
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end(await fs.readFile('./pages/404.html'));
    }
  })
  .listen(port);

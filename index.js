import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import 'dotenv/config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const port = process.env.PORT;

const app = express();

app.get('/', (req, res) => {
  res.sendFile('./pages/index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
  res.sendFile('./pages/about.html', { root: __dirname });
});

app.get('/contact-me', (req, res) => {
  res.sendFile('./pages/contact-me.html', { root: __dirname });
});

app.use((req, res, next) => {
  res.status(404).sendFile('./pages/404.html', { root: __dirname });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

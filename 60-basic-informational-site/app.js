import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
const options = {
  root: __dirname,
};

app.get('/', (_req, res) => {
  res.sendFile('index.html', options);
});

app.get('/contact', (_req, res) => {
  res.sendFile('contact.html', options);
});

app.get('/about', (_req, res) => {
  res.sendFile('about.html', options);
});

app.use((_req, res) => {
  res.status(404);
  res.sendFile('404.html', options);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

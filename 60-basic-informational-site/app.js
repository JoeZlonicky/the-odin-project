import fs from 'node:fs';
import http from 'node:http';
import url from 'node:url';

http
  .createServer((req, res) => {
    const path = url.parse(req.url, true).pathname;
    let fileName;
    let isValidPath = true;

    if (path === '/') {
      fileName = './index.html';
    } else if (path === '/contact') {
      fileName = './contact.html';
    } else if (path === '/about') {
      fileName = './about.html';
    } else {
      fileName = './404.html';
      isValidPath = false;
    }

    fs.readFile(fileName, (err, data) => {
      res.writeHead(isValidPath ? 200 : 400, { 'Content-Type': 'text/html' });
      res.write(data);
      return res.end();
    });
  })
  .listen(8080);

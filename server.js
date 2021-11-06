// server.js
const express = require('express');
const path = require('path');

const server = express();
server.use('/static', express.static(path.join(__dirname, 'public')));

server.get('/', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-type,Accept,X-Access-Token,X-Key");

  

  res.sendFile(path.join(__dirname, '/index.html'));
});


server.listen(3000, err => {
  if (err) throw err;
  console.log(`> Ready on http://localhost:3000`);
});

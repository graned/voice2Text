'use strict';
const express = require('express');
const app = express();
const port = 3000;
const host = 'localhost';

app.get('/', (req, res) => {
  res.send('\n 👋 🌍 \n');
});

app.listen(port, host, err => {
  console.log(`Listeing in ${host}:${port}`);
  if (err) throw err;
});

const express = require("express");

const app = express();

const { PORT } = require('./config');

const API = require('~/api')

app.use('/api', API)

module.exports = function startServer() {
  app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
  });
};

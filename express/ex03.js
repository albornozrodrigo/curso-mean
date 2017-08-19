const express = require('express');
const server = express();
const port = 3000

server.use('/api', function(req, res, next) {
  console.log("Início...");
  next();
  console.log("Fim...");
});

server.use('/api', function(req, res) {
  console.log("Resposta...");
  res.send('<h1>Olá API!</h1>');
});

server.listen(port, () => console.log(`Executando na porta ${port}`));

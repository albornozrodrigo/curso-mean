const express = require('express');
const server = express();
const router = require('./ex05_routes');
const port = 3000

server.use('/api', router);

server.listen(port, () => console.log(`Executando na porta ${port}`));

require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./config/db');
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

db.connect()
  .then(() => {
    console.log('Conectado ao banco de dados PostgreSQL');

    app.use(express.json());

    const donoBancaRoute = require('./routes/donoBancaRoute');
    app.use('/dono', donoBancaRoute);

    const freguesRoute = require('./routes/freguesRoute');
    app.use('/fregues', freguesRoute);

    const compraRoute = require('./routes/compraRoute');
    app.use('/compra', compraRoute);

    const itemCompraRoute = require('./routes/itemCompraRoute');
    app.use('/item', itemCompraRoute);

    // Middleware para lidar com erros de rota não encontrada
    app.use((req, res, next) => {
      res.status(404).send('Página não encontrada');
    });

    // Middleware para lidar com erros internos do servidor
    app.use((err, req, res, next) => {
      console.error(err.stack);
      res.status(500).send('Erro no servidor');
    });

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Erro ao conectar ao banco de dados:', err);
  });

  //Semana 5
const bodyParser = require('body-parser');
const cors = require('cors');
// Middlewares
app.use(cors());
app.use(bodyParser.json());
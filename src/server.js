require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./config/db');
const path = require('path');

app.use('/assets', express.static(path.join(__dirname, '../assets')));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

db.connect()
  .then(() => {
    console.log('Conectado ao banco de dados PostgreSQL');

    const homeRoute = require('./routes/homeRoute');
    app.use('/', homeRoute);

    const donoBancaRoute = require('./routes/donoBancaRoute');
    app.use('/dono', donoBancaRoute);

    const freguesRoute = require('./routes/freguesRoute');
    app.use('/fregues', freguesRoute);

    const compraRoute = require('./routes/compraRoute');
    app.use('/compra', compraRoute);

    const itemCompraRoute = require('./routes/itemCompraRoute');
    app.use('/item', itemCompraRoute);

    const mercadoriaRoute = require('./routes/mercadoriaRoute');
    app.use('/mercadoria', mercadoriaRoute);

    const FreguesController = require('./controllers/freguesController');
    app.get('/donoBanca/freguesia', FreguesController.exibirFregueses);

    app.use((req, res, next) => {
      res.status(404).send('Página não encontrada');
    });

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
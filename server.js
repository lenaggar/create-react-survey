import config from './config';
import apiRouter from './api';

import express from 'express';
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {
    content: '...'
  });
});

app.use('/api', apiRouter);
app.use(express.static('public'));

app.listen(config.port, config.host, () => {
  console.info(` ~ express app is being served at ${config.serverUrl}\n`);
});

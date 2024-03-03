const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('hello root');
});

app.listen(3000, () => {
  console.log('started....server....');
});

const express = require('express');
const morgan = require('morgan');
const os = require('os');

const app = express();

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send(`hello root ${os.hostname}`);
});
app.get('/app', (req, res) => {
  res.send(`hello app ${os.hostname}`);
});
app.get('/app/a', (req, res) => {
  res.send(`hello app  a ${os.hostname}`);
});
app.get('/asdf', (req, res) => {
  res.send(`hello asdf ${os.hostname}`);
});

app.get('/asdf/a', (req, res) => {
  res.send(`hello asdf  a ${os.hostname}`);
});

app.listen(3000, () => {
  console.log('started....server....');
});

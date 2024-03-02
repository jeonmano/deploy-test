const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('hello root');
});

app.listen(3000, () => {
  console.log('started....server....');
});

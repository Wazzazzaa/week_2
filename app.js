'use strict';
const express = require('express');
const app = express();
const port = 3000;
var cat = require('./catRouter');
app.use('/cat', cat);

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Home');
});
app.get('/post', (req, res) => {
  res.send('With this endpoint you can add cats.')
});
app.get('/put', (req, res) => {
  res.send('With this endpoint you can edit cats.')
});
app.get('/delete', (req, res) => {
  res.send('With this endpoint you can delete cats.')
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));

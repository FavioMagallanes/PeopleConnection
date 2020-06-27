const express = require('express');
const app = express();
const path = require('path');

app.use(require('./routes/index.js'));

app.use(express.static(path.join(__dirname, 'front')));

app.listen(3000, () => {
  console.log('Server on port 3000');
});
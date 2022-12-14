const express = require('express');
const path = require('path')

const app = express()

app.use(express.static(__dirname + '/dist/squeaker-ui'));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/squeaker-ui/index.html'));
});

app.listen(process.env.PORT || 3000);

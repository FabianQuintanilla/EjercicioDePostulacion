var express = require('express'); //llamamos a Express
var app = express(); 

var port = process.env.PORT || 8080 ; // establecemos nuestro puerto

app.post('/', function(req, res) {
  res.json({ mensaje: 'Método post' })   
});

app.listen(port);
console.log('API inicializada en el puerto ' + port);
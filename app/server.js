var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var cors = require('cors');
var port = process.env.PORT || 8080 ;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var corsOptions = {
    origin: 'http://localhost:8081'
  }
app.use(cors(corsOptions));


//conexión a la BD


var mysql = require('mysql');


var con = mysql.createPool({
    host: "mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com",
    user: "bsale_test",
    password: "bsale_test",
    database: "bsale_test"
  });
  
con.query('select 1 + 1', (err, rows) => { /* */ });

app.post('/api/productos', function (req, res) {
    const consulta = 'Select * from product';
    con.query(consulta, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
});

app.listen(port);
console.log('API inicializada en el puerto ' + port);



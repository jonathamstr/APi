let express = require('express');
let bodyParser = require('body-parser');
let http = require('http');
let path = require('path');


var RouterUsuario = require('./router/usuario');



var port = 800;

let app = express();

var server = http.createServer(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/',(req,res)=>{
    res.json({
        "message":"Hola",
        "persona":"Rodolfo"
      })
});

app.use('/usuario',RouterUsuario);


server.listen(port,()=>{
    console.log("Connected");
});

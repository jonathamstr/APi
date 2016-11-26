var express = require("express");
var router = express.Router();
var Usuario = require("../model/usuario.js");

router.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*"); //Estas dos lineas permite Cross-Origins, permitiendole al cliente hacer requests.
  	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  	next();//Debido a que la funcion no es asincrona, debemos hacer next para que se libere y no se quede colgado.
});

router.post('/',function(req,res){
    var usuario = req.body.usuario;
    console.log(usuario);
    Usuario.crear(usuario.Nombre,usuario.Correo,usuario.Password).then(resultado=>{
        console.log(resultado[0]);
        if(resultado[1]){
            console.log("Nuevo usuario");
        }
        else{
            console.log("Ya existia");
        }
        //res.json(resultado);
        res.send(JSON.stringify(resultado));
    });
    
});

module.exports = router;
let http = require('http'); ////importa o módulo para o arquivo

http.createServer(function(req, res){
    res.end("Ola");
}).listen(8081); //inicia um servidor

console.log('O Servidor estah rodando!');
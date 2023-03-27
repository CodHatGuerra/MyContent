let express = require("express"); //importa a lib Express para o projeto

const app = express(); //Instanceia um objeto contendo todo o express

app.get("/", function(req, res) {
    res.send("Seja bem vindo ao meu app");//Responde algo para a rota padrão do APP
});//Funcao para a Rota Padrao do APP

app.get("/sobre", function(req, res) {
    res.send("Minha Resposta");
});

app.get("/blog", function(req, res) {
    res.send("Bem vindo ao Blog");
});


app.listen(8081, function() {
    console.log("Servidor Rodando na utl http://localhost:8081");
});//start um servidor http e como parametro espera a porta do servido
//porem esta deve ser a ultima linha do código
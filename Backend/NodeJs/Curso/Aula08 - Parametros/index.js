const express = require("express");
const app = express();

app.get("/ola/:nome/:cargo", function(req, resp) {//os caracteres /: indica que o nome a frente é um parametro importado pela rota
    resp.send(req.params);//Objeto req acessa Parametros vindo da rota, para assim voce trabalhar com ele, e devovler atraves do resp
});

app.listen(8081);
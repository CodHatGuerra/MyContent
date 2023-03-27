const express = require("express");
const app = express();

app.get("/", function(req, resp) {
    //__dirname retorna caminho absoluto da aplicacao para selecionar um arquivo
    resp.sendFile(__dirname + "/html/index.html")
    //sendFIle, metodo para enviar um arquivo como resposta ao acessar a rota do servidor
});

app.listen(8081);

//https://www.youtube.com/watch?v=UkwLcuzJRDQ&list=PLJ_KhUnlXUPtbtLwaxxUxHqvcNQndmI4B&index=10&ab_channel=VictorLima-GuiadoProgramador
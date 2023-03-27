const Sequalize = require("sequelize");
const sequalize = new Sequalize('teste', 'root', '123456', {
    host: "localhost",
    dialect: 'mysql'
});


sequalize.authenticate().then(
    function(){
        console.log("Conectado com sucesso");
    }
).catch(
    function(erro){
        console.log("Conexão Mal Estabelecida Erro: " + erro);
    }    
)
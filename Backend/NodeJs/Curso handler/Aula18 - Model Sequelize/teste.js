const Sequalize = require("../Base Express e Sequelizer/node_modules/sequelize");
const sequalize = new Sequalize('teste', 'root', '123456', {
    host: "localhost",
    dialect: 'mysql'
});

//criando o modelo de tabela para o express
const Postagem = sequalize.define('postagens', {
    titulo: {
        type: Sequalize.STRING,
    },
    conteudo: {
        type: Sequalize.TEXT,
    }
});

const Usuario = sequalize.define('usuarios', {
    nome: {
        type: Sequalize.STRING
    },
    sobreNome: {
        type: Sequalize.STRING
    },
    idade: {
        type: Sequalize.INTEGER
    },
    email: {
        type: Sequalize.STRING
    }

})

Usuario.sync(); // Cria tabela sincroniza as informações de banco necessaria apontadas a cima no banco de dados conectado

//adiciona a informação a tabela objeto mencionada no banco de dados.
Postagem.create({
    titulo: 'Um Titulo Qualquér',
    conteudo: 'Teste 1234567'
})

Usuario.create({
    nome: "Gabriel Teste API",
    sobreNome: "Guerra",
    idade: 28,
    email: "Gabriel.f.guerra@gmail.com"
})

// autentica o banco e executa a conexão
sequalize.authenticate().then(
    function(){
        console.log("Conectado com sucesso");
    }
).catch(
    function(erro){
        console.log("Conexão Mal Estabelecida Erro: " + erro);
    }    
)
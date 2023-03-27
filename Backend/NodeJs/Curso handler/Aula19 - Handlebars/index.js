const Express = require("../Base Express e Sequelizer/node_modules/express");
const app = Express();
const handlebars = require("../Base Express e Sequelizer/node_modules/handlebars");
const Sequalize = require("../Base Express e Sequelizer/node_modules/sequelize");

// Config
    // Template Engine
    app.engine('handlebars', handlebars({defaultlaLayout: 'main'}))
    app.set('view engine', 'handlebars')


//  Conexão com o banco de dados Mysql
const sequalize = new Sequalize('teste', 'root', '123456', {
    host: "localhost",
    dialect: 'mysql'
});



app.listen(8081, function(){
    console.log('Servidor rodando na ulr http://localhost:8081');
});
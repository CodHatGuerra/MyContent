const Express = require("../Base Express e Sequelizer/node_modules/express");
const handlebars = require("../Base Express e Sequelizer/node_modules/express-handlebars");
const Sequalize = require("../Base Express e Sequelizer/node_modules/sequelize");
const app = Express();

// Config
    // Template Engine
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');


//  Conexão com o banco de dados Mysql
const sequalize = new Sequalize('teste', 'root', '123456', {
    host: "localhost",
    dialect: 'mysql'
});


// Rotas
    app.get('/cad', function(req, res) {
        res.render('formulario');
    });

    app.post('/add', function(req, res) {
        res.send('Formulario Recebido');
    });

app.listen(8081, function(){
    console.log('Servidor rodando na ulr http://localhost:8081');
});
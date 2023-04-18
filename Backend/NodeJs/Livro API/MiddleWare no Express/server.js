const express = require ("../node_modules/express");

const app = express();

app.use((req, res, next) => {
    console.log("Estou vindo antes de qualquer róta");
    next();
});

app.get('/', (req, res, next) => {
    console.log("Rota / Chamada");
    res.send('Hellow World');
});

app.listen(3000, () => {
    console.log('Aplicação Rodando');
});
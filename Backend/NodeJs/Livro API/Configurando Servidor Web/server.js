const express = require ("../node_modules/express");
const bodyParser = require ( "../node_modules/body-parser");

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello'));

app.listen(3000, () => {
    console.log("Exemplo de app ouvindo na porta 3000");
});
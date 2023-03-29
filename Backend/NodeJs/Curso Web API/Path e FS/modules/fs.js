const fs = require('fs');
const path = require('path');


// Criar uma pasta
/*
fs.mkdir(path.join(__dirname, '/teste'), (error) => {
    if(error)
        console.log('Error: ' + error);
    else
        console.log('Pasta Criada com Sucesso !');
})
*/


// Criar um arquivo ou subistitui arquivo ja existente 

fs.writeFile(
    path.join(__dirname, '/teste', 'teste.html'),
    'Hello NodeJS',
    (error) => {
        if(error)
            console.log("Error: " + error);
        else
            console.log("Arquivo Criado com Sucesso !");
});

// Adicionar Informação a um arquivo

fs.appendFile(
    path.join(__dirname, '/teste', 'teste.html'),
    'Hello NodeJS Alterado',
    (error) => {
        if(error)
            console.log("Error: " + error);
        else
            console.log("Arquivo Alterado com Sucesso !");
    }
)

// Ler Arquivo
fs.readFile(path.join(__dirname, '/teste', 'teste.txt'), 'utf-8', (error, data) => {
    if(error)
        console.log('Error: ' + error);
    else
        console.log(data);
})
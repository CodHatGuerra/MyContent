// g  - global (encontra todas as ocorrências)
// i - insensitive
// ( ) grupos
// | ou 

const texto = `João trouxe    flores para sua amada namorada em 10 de janeiro de 1970,
maria era o nome dela.


Foi um ano excelente na vida de joão. Teve 5 filhos, todos adultos atualmente.
maria, hoje sua esposa, ainda faz aquele  café com pão de queijo nas tardes de
domingo. Também né! Sendo a boa mineira que é, nunca esquece seu famoso pão de queijo.
Não canso de ouvir a Maria:
"Jooooooooooãoooooooo, o café tá prontinho aqui. Veeemm"!
`;

const cpfs = `
Os CPFs São:
234.906.228-71 215.978.456-12 047.258.369-96


963.987.321.00
`

const ips = `
Os ips são:
 0.0.0.0.
 192.168.1.1
 10.10.5.12
 255.255.255.255
`

const arquivos = [
    'Atenção.jpg',
    'FOTO.jpeg',
    'Meu gatinho.jpg',
    'Meu gatinho.JPG',
    'Marido.png',
    'lista de compras.txt'
]

const regExp1 = /café/gi;
/*
// test retorna booleano caso o regex for verdadeiro ou falso
console.log(regExp1.test(texto))

// EXEC retorna array com informações sobre a string pesquisada
console.log(regExp1.exec(texto))

console.log(texto.match(regExp1))

// Troca um caracter ou grupo para outro.
console.log(texto.replace(/João/gi, 'Felipe'))

console.log(texto.replace(/(João|Maria)/gi, (input) => (
    input.toUpperCase()
)))

// Quantificadores
// * () (opcional)
// + (obrigatorio) 1 ou  n   (adiciona uma repetição a string)
// ? (opcional)
//  \ Caractere de escape
// {n, m}
const regExp2 = /Jo+ão+/gi
const regExp3 = /\.jpe?g/gi;

console.log(texto.match(regExp2))

for(i of arquivos)
{
    console.log(i.match(regExp3))
}

const html = "<p>Olá Mundo</p> <p>Olá de novo</p>"

console.log(html.match(/<.+?>.+?<\/.+?>/))

*/

const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz ܓ۞ 0123456789 ۞ܓ"

console.log(alfabeto)

console.log(alfabeto.match(/[\S]+/g))

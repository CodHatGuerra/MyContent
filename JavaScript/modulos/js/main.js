import helloworld from './components/helloworld.js';
import { soma } from './matematica.js';
import { agrupaPorMaiorEMenor } from './components/util.js'
import lista from './components/List.js'

const pessoas = [
    {
        nome: 'Gabriel',
        idade: 28
    },
    {
        nome: 'Fernando',
        idade: 17
    },
    {
        nome: 'Dos Santos',
        idade: 15
    },
    {
        nome: 'Guerra',
        idade: 32
    }
]


const  {maiores, menores} = agrupaPorMaiorEMenor(pessoas)

const html = `
    ${helloworld('Programador a bordo')}
    <h3>Maiores</h3>
    ${lista(maiores)}
    <h3>Menores</h3>
    ${lista(menores)}

`




document.querySelector("div#app").innerHTML = html



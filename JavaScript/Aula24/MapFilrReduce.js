/*map*/

const numero = [2, 3, 6, 5, 10]
let novoArrayNumeros = []
for (let i = 0; i < numero.length; i++)
{
    novoArrayNumeros.push(numero[i] * 2)
}

console.log(novoArrayNumeros)

const novoArrayMap =numero.map(function(numero){
    return numero * 3
})

console.log(novoArrayMap)





/* filter */

const mult = [2, 3, 6, 5, 10]
let mult2 = []
for (let i = 0; i < mult.length; i++)
{
    if(mult[i] % 2 == 0)
    mult2.push(mult[i])
}

console.log(mult2)


const numerosFiltrados = mult.filter(numero => numero % 2 == 0 )

console.log(numerosFiltrados)

const mapFilter = mult
    .filter(numero => numero % 2 ==0)
    .map(numero => numero * 2)

console.log(mapFilter)



/* reduce */

let soma = 0

for (let i = 0; i < mult.length; i++)
{
    soma += mult[i]
}

console.log(soma)

var tot = mult.reduce((valorAcumulador, valorArray) =>{
    return valorAcumulador + valorArray
},0)

console.log(tot)


/*exercicio reduce*/

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

{(function(valorAcumulador, valorArray){}, {})}

var valoragp = pessoas.reduce((valorAcumulador, valorArray) =>{
    const propMaiorOuMenor = valorArray.idade >= 18 ? 'maiores' : 'menores'
    valorAcumulador[propMaiorOuMenor].push(valorArray)
    return valorAcumulador
}, {maiores: [], menores: []})

console.log(valoragp)
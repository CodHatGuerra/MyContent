let num = [2,3,4,5,6,7,8]


for(var i=0;i< num.length;i++)
{
    console.log(`A Posição: ${i} tem o Valor: ${num[i]}`)
}

var num1 = [2,3,4,5,6,7,8]

for(let n in num1)
{
    console.log(num1[n])
}

console.log("Pesquisando o Index do Valor 5: >" + num.indexOf(5))


const items = [
   { name: 'Bike', price: 100 },
   { name: 'TV', price: 200 },
   { name: 'Album', price: 10 },
   { name: 'Book', price: 5 },
   { name: 'Phone', price: 500 },
   { name: 'Computer', price: 1000 },
   { name: 'Keyboard', price: 25 }
]
//Filter, Filtra Um array ou seja, testa uma condição item por item.
const filteredItems = items.filter((item) => (
    item.price <= 100
))

console.log(filteredItems)
//Map Method, Este metodo do something on all position of an array
const mapItems = items.map((item) => (
    item.price + 10
))

console.log(mapItems)
//Procura um determinado valor apartir da logica inserida
const foundItem = items.find((items) => (
    items.name == 'Book'
))

console.log(foundItem)

//Procura um determinado valor apartir da logica inserida
items.forEach((item) => (
    console.log(item)
))
//caso condição seja verdadeira retorna TRUE
const hasbook = items.some((items)=>(
    items.name == 'Book'
))

console.log(hasbook)
// devolve true or false baseando em uma condição que é equiparada aos indices da array
const hasBookk = items.every((items) => (
    items.price <= 1000
)) 

console.log(hasBookk)

var total = items.reduce((valorAnterior, item) =>(
    valorAnterior + item.price,0
))

console.log(total)

let incluso = [1, 2, 3, 4, 5].includes(5)

console.log(incluso)
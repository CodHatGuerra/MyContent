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
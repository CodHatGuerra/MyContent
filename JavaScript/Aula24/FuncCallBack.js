function fncallback(valor)
{
    console.log(`O Valor da operacao foi ${valor}`)
}

function somar(a, b, cb)
{
    let tot = a + b
    cb(tot)
}


function subtrair(a, b, cb)
{
    let tot = a - b
    cb(tot)
}


somar(10,5, fncallback)

subtrair(10, 3, fncallback)


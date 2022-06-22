var arreiValores = [1,4,9]

function mapa(callback,valorAtual,indice=0,arrei)
{
    let valores = []
    for(let i=indice; i < valorAtual.length;i++)
    {   let acumulador = callback(valorAtual[i])
        valores.push(acumulador)
    }
    return valores
}




function callback(a)
{
    return Math.sqrt(a)
}


var arreiMapeado = mapa(callback, arreiValores)

console.log(arreiMapeado)


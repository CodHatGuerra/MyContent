function somarray(a){
    var tot=0
    for(var c of a)
    {
        tot += c
    }

    return tot
}
var numeros = [1,2,3,4,5]

var total = somarray(numeros)
console.log(total)
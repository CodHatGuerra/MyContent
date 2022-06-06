function somaCallback(a,b, fnCallback) {
    return fnCallback(a + b)
}

console.log(somaCallback(10,3, function(total)
{
    return total * 2
}))



function subtraiCallback(a,b, fnsubCallback) {
    return fnsubCallback(a - b)
}

var subtrai = function(total) {
    return total * 2
}

console.log(subtraiCallback(10,3, subtrai))
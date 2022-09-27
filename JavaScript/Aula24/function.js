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

function addLeadingZeros(num, totalLength) {
    return String(num).padStart(totalLength, '0');
  }

  console.log(addLeadingZeros(3, 2));

  console.log(moment(new Date(2021, 1, 1)).toISOString())



var a = "I want apple";
var b = " an";
var position = 6;
var output = [a.slice(0, position), b, a.slice(position)].join('');
console.log(output);


var a = ['a', 'b', 'c']

console.log(a.length)
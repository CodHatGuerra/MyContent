/*20 Methodos String*/

var stringOne = "FreeCodeCamp is the best place to learn"
var stringTwo = "frontend and backend development"

// CharAt()  retorna o caractere alocado na posição inserida
console.log(stringOne.charAt(1))

//charCodeAt  Mostra qual o Codigo do caracter na respectiva posição
console.log(stringOne.charCodeAt(1))

// concat() Concatena um ou mais strings em uma unica só
console.log(stringOne.concat(stringTwo))

// endsWith() verifica se o final da string informada (sendo caracter ou palavra) é verdadeiro
console.log(stringOne.endsWith("learn"))

// fromCharCode() transforma um codigo em caracter
console.log(String.fromCharCode(114))

// includes() verificar se na string existe determinado valor em character
console.log(stringTwo.includes("end"))

// indexOf() devolve o indice do primeiro caracter encontrado
console.log(stringTwo.indexOf("c"))

// lastIndexOf() retorna o indice do ultimo valor encontrado
console.log(stringTwo.lastIndexOf("t"))

// match() pesquisa se um caracter ou grupo de caracter esta presente na string, devolve indices e ionformações relacionada.
console.log(stringOne.match(/best/))

//repeat() repeat quantas vezes for declada a string chamada na função
console.log(stringOne.repeat(3))

//replace() troca um caracter ou um conjunto de caracter por um novo
console.log(stringOne.replace(/best/gi, "MELHOR"))

// search()
console.log(stringTwo.search("and"))

//slice() recorta uma quantidade de caracter de uma string, determinando a quantidade no parametro
console.log(stringTwo.slice(0,8)) 

//split() divide uma string em varias substrings no caso vindo como um array a quebra determinante tem que estar presente na string
//exemplo varios espaços, a string sera quebrada em espaços.
console.log(stringTwo.split(" "))

//startsWith() confere se a string inicia com os valores passado no parametro
console.log(stringOne.startsWith("Free"))

//substr() subtrai os valores no raio informado no parametro e retorna
console.log(stringTwo.substr(2, 4))

//substring() subtrai os valores no raio informado, assim como o substr()
console.log(stringOne.substring())

//toLowerCase()
console.log(stringOne.toLocaleLowerCase())

//toUppercase
console.log(stringTwo.toUpperCase())

//trim()
var stringThree = "     Teste Trim!"
console.log(stringThree.trim())

/* this em escopo global chama a Window*/

function Usuario() {
    this.nome = 'gabriel'
    this.idade = 28
    this.soma = function(a, b){return a + b}
}


console.log(new Usuario()) 
var usuario = new Usuario()

console.log(usuario.nome)
console.log(usuario.soma(10,4))


//call


 function Personagem()   {
    console.log(this)
 }

var PersonagemThis = {
    Nome: 'malagueta'
}

Personagem.call(PersonagemThis)


// Apply

Personagem.apply(PersonagemThis)



//Bind

var pers =  Personagem.bind(PersonagemThis)

pers()


//arrow functions

var soma = (a, b) => {
    return a + b
}

console.log(soma(1, 2))

var subtrair = (a, b) => a - b

console.log(subtrair(3,1))

var objeto = () => (
    {
        nome: 'gabriel',
        idade: 28
    }
)

console.log(objeto())


var objetoo = cidade => (
    {
    nome: 'gabriel',
    idade: 28,
    cidade
})

console.log(objetoo('igaracu'))
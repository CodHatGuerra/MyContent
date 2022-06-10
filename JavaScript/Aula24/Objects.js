var usuario = {
    nome: 'Gabriel',
    idade: 27,
    nacionalidade: 'brasileiro'
}

console.log(usuario)

usuario.ano = 2022

console.log(usuario.ano)

delete usuario.ano

console.log(usuario)

usuario.hobbies = ['musica', 'jogos', 'esportes']

console.log(usuario)

var usuario2 = {
    nome: 'gabriel',
    ano: 2022,
    competencias: {
        linguagem: ['JS', 'C#', 'Pyton'],
        instrumentos: ['guitarra', 'baixo', 'violao']
    }
}

console.log(usuario2)

usuario2 = {
    digaOi: function(name) {
        return `Ola ${name}`
    }
}



console.log(usuario2.digaOi('Gaabriel'))


var usuario4 = {
    nome: 'Gabriel Guerra',
    estado: 'Rio de Janeiro'
}

var extraInfo = {
    pais: 'Brasil',
    estado: 'Rio de Janeiro'
}

var novoUsuario = Object.assign({}, usuario4, extraInfo)
console.log(novoUsuario)

var novoUsuario2 = {
    ...usuario4,
    ...extraInfo
}

console.log(novoUsuario2)


var nomeVariavel = 'estado'

var usuario5 = {
   [nomeVariavel] : 'são paulo'  
}

console.log(usuario5)


//getters e setters

var usuarios = [
    {
        nome: 'Gabriel',
        idade: 28
    },
    {
        nome: 'fernando',
        idade: 36
    },
    {
        nome: 'rodrigo',
        idade: 30
    }
]





/* */

var usuario = 
{
    posicao: 0,
    proximo: function(n)
    {
        ++this.posicao 
    },

    anterior: function(n)
    {
        --this.posicao 
    },
    get atual()
    {
        return usuarios[this.posicao]
    },

    set atual(n)
    {
        this.posicao = n
    }
}
    

console.log(usuario.atual)
usuario.proximo()
console.log(usuario.atual)
usuario.atual = 0
console.log(usuario.atual)
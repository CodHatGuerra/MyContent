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
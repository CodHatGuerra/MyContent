/* utilizando var define escopo da variavel como local*/

function imprimenome()
{
    var nome = 'gabriel'
    console.log(nome)

}

imprimenome()
 


function imprimiThis() 
{
    console.log(`ImprimiThis`, this)
}

function imprimiMensagem() 
{
    imprimiThis.call({msg: `Sou um Objeto`})
}

function imprimiMensagem2()
{
    imprimiThis.call([`Eu Sou um Array`])
}

imprimiMensagem()
imprimiMensagem2()



/* escolo lexical*/


 function nome()
 {
    var nome = `gabriel`
    return function()
    {
        var sobrenome = `guerra`
        console.log(nome, sobrenome)
    }
 }

 var usuario = nome()
 usuario()


 /* Let escopos de bloco*/

if (true)
{
    var escopo = `escopo`
    console.log(escopo)
    let escopo1 = `escopo1`
}

console.log(escopo)
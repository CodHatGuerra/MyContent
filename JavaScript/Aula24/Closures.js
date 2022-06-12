function imprimenome() 
{
    let nome = `gabriel`
    return function(){
        return nome
    }
}

var nome = imprimenome()

console.log(nome())

function minhaBiblioteca()
{  
    function auxiliar(n)
    {
        return 10 + n    
    }
    return{
        add5(){return auxiliar(5)},
        add7(){return auxiliar(7)}
    }
}

var biblioteca = minhaBiblioteca()

console.log(biblioteca.add5())
console.log(biblioteca.add7())
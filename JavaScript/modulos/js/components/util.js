export var agrupaPorMaiorEMenor = pessoas => (pessoas.reduce(function(valorAcumulador, valorArray){
    const propMaiorOuMenor = valorArray.idade >= 18 ? 'maiores' : 'menores'
    valorAcumulador[propMaiorOuMenor].push(valorArray)
    return valorAcumulador
}, {maiores: [], menores: []}))




class Carro {
    static alerta=true
    constructor(marca,modelo,cor,ligado,km,comb) {
        this.marca = marca
        this.modelo = modelo
        this.cor = cor
        this.ligado = ligado
        this.km = km
        this.comb = comb
    }

    get getMarca() {
        return this.marca
    }

    get getModelo() {
        return this.modelo
    }

    get getCor() {
        return this.cor
    }

    get getLigado() {
        return this.ligado
    }

    get getKm() {
        return this.km
    }

    get getComb() {
        return this.comb
    }

    set setMarca(marca) {
        tis.marca = marca
    }

    set setModelo(modelo) {
        tis.modelo = modelo
    }

    set setCor(cor) {
        tis.cor = cor
    }

    set setLigado(Ligado) {
        tis.Ligado = Ligado
    }

    set setMarca(marca) {
        tis.marca = marca
    }

    set setKm(km) {
        tis.km = km
    }

    set setComb(comb) {
        tis.comb = comb
    }
    
    info(){
        return (`Marca......: ${this.getMarca}\nModelo.....: ${this.getModelo}\nCor........: ${this.getCor}\nLigado.....: ${this.getMarca?"Ligado":"Desligado"}\nKm.........: ${this.getKm}\nComb.......: ${this.getComb}\nAlerta.......: ${Carro.alerta? "Sim":"Não"}\n`)
    }
}

let C1 = new Carro("Honda", "HRV", "Prata", true, 20, 50)
let C2 = new Carro("VW", "Golf", "Branco", false, 20, 50)
let C3 = new Carro("GM", "Camaro", "Preto", true, 20, 50)
let C4 = new Carro("Ford", "Mustang", "Vermelho", false, 20, 50)

console.log(C1.info())
console.log(C2.info())
console.log(C3.info())
console.log(C4.info())


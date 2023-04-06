const CarroService = require("../services/CarroService.js");

module.exports = {
  buscarTodos: async (req, res) => {
    let json = { error: "", result: [] };

    let carros = await CarroService.buscarTodos();

    for (let i in carros) {
      json.result.push({
        codigo: carros[i].codigo,
        modelo: carros[i].modelo,
        placa: carros[i].placa,
      });
    }
    res.json(json);
  },

  buscarUm: async (req, res) => {
    let json = { error: "", result: {} };

    let codigo = req.params.codigo;

    let carro = await CarroService.buscarUm(codigo);

    if (carro) {
      json.result = {
        codigo: carro.codigo,
        modelo: carro.modelo,
        placa: carro.placa,
      };
    }

    res.json(json);
  },

  inserir: async (req, res) => {
    let json = { error: "", result: {} };

    let modelo = req.body.modelo;
    let placa = req.body.placa;

    if (modelo && placa) {
      let CarroCodigo = await CarroService.inserir(modelo, placa);
      json.result = {
        codigo: CarroCodigo,
        modelo,
        placa,
      };
    } else {
      json.error = 'Campos não Enviados'
    }
    res.json(json);
  },
};

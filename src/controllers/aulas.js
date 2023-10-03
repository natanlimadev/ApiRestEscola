let { aulas, instrutores, identificadorAula } = require("../data/bancoDeDados");

const cadastrarAula = (req, res) => {
  const { idInstrutor } = req.params;
  const { titulo, descricao } = req.body;

  const instrutor = instrutores.find((instrutor) => {
    return instrutor.id === Number(idInstrutor);
  });

  if (!instrutor) {
    return res.status(404).json({ mensagem: "Instrutor não encontrado!" });
  }

  const aula = {
    id: identificadorAula++,
    instrutor_id: Number(idInstrutor),
    titulo,
    descricao,
  };

  aulas.push(aula);
  return res.status(201).json(aula);
};

const listarAulas = (req, res) => {
  return res.json(aulas);
};

const obterAula = (req, res) => {
  const { idInstrutor } = req.params;

  const aula = aulas.find((aula) => {
    return aula.id === Number(idInstrutor);
  });

  if (!aula) {
    return res.status(404).json({ mensagem: "Aula não encontrada!" });
  }

  return res.json(aula);
};

const obterAulaInstrutor = (req, res) => {
  const { idInstrutor } = req.params;

  const instrutor = instrutores.find((instrutor) => {
    return instrutor.id === Number(idInstrutor);
  });

  if (!instrutor) {
    return res.status(404).json({ mensagem: "Instrutor não encontrado!" });
  }

  const aula = aulas.filter((aula) => {
    return aula.instrutor_id === instrutor.id;
  });

  return res.json(aula);
};

module.exports = { cadastrarAula, listarAulas, obterAula, obterAulaInstrutor };

const express = require("express");

const instrutores = require("../controllers/instrutores");
const aulas = require("../controllers/aulas");

const rotas = express();

rotas.get("/instrutores", instrutores.listagem);
rotas.get("/instrutores/:id", instrutores.obterInstrutor);
rotas.post("/instrutores", instrutores.cadastrarInstrutor);
rotas.put("/instrutores/:id", instrutores.atualizarInstrutor);
rotas.patch("/instrutores/:id/status", instrutores.atualizarStatus);
rotas.delete("/instrutores/:id", instrutores.excluirInstrutor);

rotas.post("/instrutores/:idInstrutor/aulas", aulas.cadastrarAula);
rotas.get("/aulas", aulas.listarAulas);
rotas.get("/aulas/:idInstrutor", aulas.obterAula);
rotas.get("/instrutores/:idInstrutor/aulas", aulas.obterAulaInstrutor);

module.exports = rotas;

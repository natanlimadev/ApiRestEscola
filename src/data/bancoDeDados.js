const bancoDeDados = {
  identificadorInstrutor: 4,
  identificadorAula: 2,
  instrutores: [
    { id: 1, nome: "Alfonso", email: "alfonso@email.com", status: true },
    { id: 2, nome: "Natan", email: "natan@email.com", status: true },
    { id: 3, nome: "Diego", email: "diego@email.com", status: true },
  ],
  aulas: [
    {
      id: 1,
      instrutor_id: 1,
      titulo: "Primeiro Servidor",
      descricao: "construindo o primeiro servidor",
    },
  ],
};

module.exports = bancoDeDados;

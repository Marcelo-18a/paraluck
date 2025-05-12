import express from "express";
import Unidades from "../models/unidade.js";

const router = express.Router();

// ROTA UNIDADES
router.get("/unidades", function (req, res) {
  Unidades.findAll()
    .then((unidades) => {
      res.render("unidades", {
        unidades: unidades,
      });
    })
    .catch((err) => {
      res.send("Erro ao buscar unidades: " + err.message);
    });
});

// ROTA DE CADASTRO DE CLIENTES
router.post("/unidades/cadastrar", (req, res) => {
  const {
    Nome_unidade,
    Area_Atuacao,
    CNPJ_Unidade,
    telefone,
    Rua,
    Bairro,
    Numero,
    Cidade,
    Estado
  } = req.body;

  Unidades.create({
    Nome_unidade: Nome_unidade,
    Area_Atuacao: Area_Atuacao,
    CNPJ_Unidade: CNPJ_Unidade,
    Rua: Rua,
    Bairro: Bairro,
    Numero: Numero,
    Cidade: Cidade,
    Estado: Estado,
    Ativacao_Unidade: true // valor padrão ao cadastrar, pode ajustar conforme lógica do seu sistema
  })
    .then(() => {
      res.redirect("/unidades"); // redireciona para a lista de unidades após cadastro
    })
    .catch((err) => {
      res.send("Erro ao cadastrar unidade: " + err.message);
    });
});



export default router;

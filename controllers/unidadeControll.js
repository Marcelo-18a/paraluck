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

export default router;

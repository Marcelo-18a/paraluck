import express from "express";
import Usuarios from "../models/usuarios.js"; // Importando o modelo correto

const router = express.Router();

// ROTA USUÁRIOS
router.get("/usuarios", function (req, res) {
  Usuarios.findAll()
    .then((usuarios) => {
      res.render("usuarios", {
        // A página de renderização agora se chamará "usuarios"
        usuarios: usuarios,
      });
    })
    .catch((err) => {
      res.send("Erro ao buscar usuários: " + err.message);
    });
});

export default router;

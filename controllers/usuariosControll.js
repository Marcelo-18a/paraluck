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

router.get("/usuarios/delete/:id", (req, res) => {
  const id = req.params.id;

  Usuarios.destroy({
    where: {
      ID_Usuario: id
    }
  })
  .then(() => {
    res.redirect("/usuarios"); // redireciona após deletar
  })
  .catch((err) => {
    console.error("Erro ao deletar usuário:", err);
    res.status(500).send("Erro ao tentar excluir o usuário.");
  });
});

export default router;

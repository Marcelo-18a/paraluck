import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const Usuarios = connection.define("usuarios", {
  ID_Usuario: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Nome_Usuario: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Idade_Usuario: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  Data_Nascimento_Usuario: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  Perfil_Acesso: {
    type: Sequelize.STRING,
    allowNull: false
  },
}, {
  timestamps: false,          
  freezeTableName: true
});
Usuarios.sync({foece: false})
export default Usuarios;

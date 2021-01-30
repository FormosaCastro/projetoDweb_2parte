module.exports = (sequelize, type) =>
  sequelize.define('usuarios', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: type.STRING,
    
    email: {
      type: type.STRING,
      allowNull: false,
    },

    senha: {
      type: type.STRING,
      allowNull: false,
    },
    resetsenhaToken: type.STRING,
    resetsenhaExpires: type.DATE,
  });

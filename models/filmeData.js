module.exports = (sequelize, type) =>
  sequelize.define('filmeData', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    TituloOriginal: type.STRING,
    TituloEstrangeiro : type.STRING,
    
  
  });

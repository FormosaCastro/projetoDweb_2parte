const Sequelize = require("sequelize");
const UserModel = require("./models/usuarios");
const FilmeModel = require("./models/filmeData");


const db = {};
db[0] = new Sequelize("hollywood", "root", '', {
  host: "localhost",
  dialect: "mysql",
});


const tables = {};
tables[0] = UserModel(db[0], Sequelize);
tables[0] = FilmeModel(db[0], Sequelize);



db[0].sync().then(() => {
  console.log(
    "Criou na BD hollywood as tabelas usuarios e filmeData "
  );
});

/*
  const bcrypt = require("bcrypt"),
  BCRYPT_SALT_ROUNDS = 12;

bcrypt.hash("123", BCRYPT_SALT_ROUNDS).then((hashedsenha) => {
    User.create({
      nome: "Formosa",
      email: "xanise@gmail.pt",
      senha: hashedsenha,
    }).then((user) => {
      console.log("Utilizador adicionado!");
    });
  });
*/
module.exports = tables;
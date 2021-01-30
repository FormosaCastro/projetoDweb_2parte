const tables = require("../sequelize");
const passport = require("passport");
const User = tables[0];

module.exports = (app) => {
  app.post("/registerUser", (req, res, next) => {
    passport.authenticate("cadastro", (err, user, info) => {
      if (err) {
        console.log(err);
      }
      if (info != undefined) {
        res.status(200).send({message: `${info.message}`}); // envia ao cliente a indicação da falha de registo
      } else {
        req.login(user, (err) => {
          // este método é necessário para as callback funcionarem
          const data = {
            nome: req.body.nome,
            email: req.body.email,
            
          };
          User.findOne({
            where: {
              nome: data.nome,
            },
          }).then((user) => {
            user
              .update({
                nome: data.nome,
                email: data.email,
              })
              .then(() => {
                console.log("Utilizador criado na BD!");
                res.status(200).send({ message: "Utilizador adicionado!" });
              });
          });
        });
      }
    })(req, res, next);
  });
};

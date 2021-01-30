const tables = require("../sequelize");
const Filmes = tables[0];

module.exports = (app) => {
  app.get("/allfilmes ", (req, res, next) => {
        Filmes.findAll()
        .then((filmes) => {
            res.status(200).send(JSON.stringify(filmes,null, 2));
        });
      });
};
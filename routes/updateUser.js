const passport = require('passport');
const tables = require('../sequelize');
const User = tables[0];

module.exports = (app) => {
  app.put('/updateUser', (req, res, next) => {
    passport.authenticate('jwt', { session: false }, (err, user, info) => {
      if (err) {
        console.error(err);
      }
      if (info !== undefined) {
        console.error(info.message);
        res.status(403).send(info.message);
      } else {
        User.findOne({
          where: {
            nome: req.body.nome,
          },
        }).then((userInfo) => {
          if (userInfo != null) {
            console.log('user found in db');
            userInfo
              .update({
                nome: req.body.nome,
                email: req.body.email,
              })
              .then(() => {
                console.log('Utilizador atualizado!');
                res.status(200).send({ auth: true, message: 'Utilizador atualizado!' });
              });
          } else {
            console.error('Utilizador não localizado na BD para atualizar!');
            const newLocal = res
            .status(401)
            .send('Utilizador não localizado na BD para atualizar!');
          }
        });
      }
    })(req, res, next);
  });
};
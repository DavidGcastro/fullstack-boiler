const router = require('express').Router();
const { User } = require('../db/models/index');

router.post('/', (req, res, next) => {
  const { email, password } = req.body;
  User.findOne({
    where: {
      email,
      password,
    },
  })
    .then(function (user) {
      if (!user) {
        res.sendStatus(401);
      } else {
        req.session.userId = user.id;
        res.status(200).send(user);
      }
    })
    .catch(next);
});

module.exports = router;

const { User } = require("../models/index");

const userLogin = (req, res) => {
  res.status(201).send(req.user);
};

const userRegister = (req, res) => {
  User.findOne({
    username: req.body.username,
  }).then((foundUser) => {
    if (!foundUser) {
      User.create(req.body).then((user) => res.status(201).send(user));
    }
    if (foundUser) {
      res.sendStatus(401);
    }
  });
};

const userLogout = (req, res) => {
  req.logOut();
  res.status(201).send("DESLOGEADO");
};

const cookieUser = (req, res) => {
  if (req.isAuthenticated()) {
    res.send(req.user);
  } else {
    res.send({});
  }
};

module.exports = {
  userLogin,
  userLogout,
  cookieUser,
  userRegister,
};

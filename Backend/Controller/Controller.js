const UserModel = require("../Model/User.Model");

exports.userCreateController = (req, res) => {
  const { name, image, role } = req.body;
  UserModel.create({ name, image, role })
    .then((item) => {
      res.send({ Data: item });
    })
    .catch((err) => {
      console.log(err.message);
    });
};
exports.userGetController = (req, res) => {
  UserModel.find()

    .then((item) => {
      res.send({ Data: item });
    })
    .catch((err) => {
      console.log(err.message);
    });
};

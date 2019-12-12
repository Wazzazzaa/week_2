const userModel = require('./userModel');

const user = userModel.user;
/*

const user_list_get = (req, res, next) => {
  console.log(req.body);
  res.json(req.body)
};
const user_get = (req, res) => {
  const use=user.filter( i=>i.id == req.params.id);
  res.json(use);
};

*/
const getUser = async (req, res) => {
  const users = await userModel.getUser();
  res.json(users);
};
const user_create_post = async (req, res) => {
  const users = await userModel.addUser();
  res.json(users);
};

module.exports = {
  getUser,
  user_create_post
};

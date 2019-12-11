const userModel = require('./userModel');

const user = userModel.user;


const user_list_get = (req, res, next) => {
  console.log(req.body);
  res.json(req.body)
};
const user_get = (req, res) => {
  const use=user.filter( i=>i.id == req.params.id);
  res.json(use);
};


module.exports = {
  user_list_get,
  user_get,
};

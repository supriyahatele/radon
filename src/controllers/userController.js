const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  //You can name the req, res objects anything.
  //but the first parameter is always the request 
  //the second parameter is always the response
  let data = req.body;
  let savedData = await userModel.create(data);
  
  res.send({ msg: savedData });
};
// **************************************************************************************
const loginUser = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({
      status: false,
      msg: "username or the password is not corerct",
    });

  // Once the login is successful, create the jwt token with sign function
  // Sign function has 2 inputs:
  // Input 1 is the payload or the object containing data to be set in token
  // The decision about what data to put in token depends on the business requirement
  // Input 2 is the secret
  // The same secret will be used to decode tokens
  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "thorium",
      organisation: "FunctionUp",
    },
    "functionup-radon"
  );
  res.setHeader("x-auth-token", token);
  res.send({ status: true, token: token });
};
// **************************************************************************************
const getUserData = async function (req, res) {
  // let token = req.headers['x-Auth-token'];
  // if (!token) token = req.headers['x-auth-token'];
  // if (!token) return res.send({ status: false, msg: 'token must be present' });
  // console.log(token);
  // let decodedToken = jwt.verify(token, 'functionup-radon');
  // if (!decodedToken)
  //   return res.send({ status: false, msg: 'token is invalid' });
  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: 'No such user exists' });
  res.send({ status: true, data: userDetails });
};

// **************************************************************************************
const updateUser = async function (req, res) {
  // let token = req.headers['x-Auth-token'];
  // if (!token) token = req.headers['x-auth-token'];
  // if (!token) return res.send({ status: false, msg: 'token must be present' });
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  if (!user) {
    return res.send('No such user exists');
  }
  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData,{ new: true });
  res.send({ status: updatedUser, data: updatedUser });
};
// **************************************************************************************
const deleteUser = async function (req, res) {
  // let token = req.headers['x-Auth-token'];
  // if (!token) token = req.headers['x-auth-token'];
  // if (!token) return res.send({ status: false, msg: 'token must be present' });
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  if (!user) {
    return res.send('No such user exists');
  }
  let userdata=req.body
  let deletedUser = await userModel.findOneAndUpdate({ _id: userId }, userdata,{ new: true });
  res.send({ data: deletedUser });
};

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser=deleteUser







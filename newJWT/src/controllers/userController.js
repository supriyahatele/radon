const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

// =====================[ Create Users]===============

const createUser = async function (abcd, xyz) {
  try {
    let data = abcd.body;
    let savedData = await userModel.create(data);
    xyz.status(201).send({ msg: savedData });
  } catch (err) {
    xyz.status(500).send({ msg: "err", err: err.message });
  }
};

// =====================[ login Users]===============

const loginUser = async function (req, res) {
  try {
    let userName = req.body.emailId;
    let password = req.body.password;

    let user = await userModel.findOne({
      emailId: userName,
      password: password,
    });
    if (!user)
      return res.status(400, "bad request").send({
        status: false,
        msg: "username or the password is not corerct",
      });

    // ---------[Create Token JWT]---------

    let token = jwt.sign(
      {
        userId: user._id.toString(),
        batch: "radon", //payload data
        organisation: "FunctionUp",
      },
      "functionup-radon" //Secret Key
    );
    res.setHeader("x-auth-token", token);
    res.status(202).send({ status: true, token: token });
  } catch (err) {
    res.status(500).send({ msg: "err", err: err });
  }
};

// =====================[ Get Users]===============

const getUserData = async function (req, res) {
  try {
    let userId = req.params.userId;
    let user = await userModel.findById(userId);
    let userDetails = await userModel.findById(userId);
    if (!user) {
      return res.status(404).send("No such user exists");
    }
    res.send({ status: true, data: userDetails });
  } catch (err) {
    res.status(500).send({ msg: "err", err: err });
  }
};

// =====================[ Update Users]===============

const updateUser = async function (req, res) {
  try {
    let userData = req.body;
    let userId = req.params.userId;
    let user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).send("No such user exists");
    }
    let updatedUser = await userModel.findOneAndUpdate(
      { _id: userId },
      userData,
      { new: true }
    );
    res.send({ status: true, data: updatedUser });
  } catch (err) {
    res.status(500).send({ msg: "err", err: err });
  }
};

// =================[ Delete User ]==============

const deleteUser = async function (req, res) {
  try {
    let userId = req.params.userId;
    let user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).send("No such user exists");
    }

    let userData = req.body;
    let updatedUser = await userModel.findOneAndUpdate(
      { _id: userId },
      userData,
      { new: true }
    );
    res.send({ status: userData, data: updatedUser });
  } catch (err) {
    res.status(500).send({ msg: "err", err: err });
  }
};

// =================[ Update Post ]==============

const postMessage = async function (req, res) {
  try {
    let message = req.body.message;
    let user = await userModel.findById(req.params.userId);
    if (!user)
      return res
        .status(404)
        .send({ status: false, msg: "No such user exists" });

    let updatedPosts = user.posts;
    //add the message to user's posts
    updatedPosts.push(message);
    let updatedUser = await userModel.findOneAndUpdate(
      { _id: user._id },
      { posts: updatedPosts },
      { new: true }
    );

    //return the updated user document
    return res.send({ status: true, data: updatedUser });
  } catch (err) {
    res.status(500).send({ msg: "err", err: err });
  }
};

// =====================[ Exports ]===============

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser;
module.exports.postMessage = postMessage;

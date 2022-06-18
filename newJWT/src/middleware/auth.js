const jwt = require("jsonwebtoken");

const authenticate = async (req, res, next) => {
  try {
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
    if (!token)
      return res
        .status(401)
        .send({ status: false, msg: "token must be present" });
    console.log("hellllooo");
  } catch (err) {
    res.status(500).send({ msg: "err", err: err });
  }
  next();
};

const authorise = function (req, res, next) {
  try {
    let token = req.headers["x-auth-token"];
    let decodedToken = jwt.verify(token, "functionup-radon");
    if (!decodedToken)
      return res.status(400).send({ status: false, msg: "token is invalid" });

    let findUserId = decodedToken.userId;
    let checkUser = req.params.userId;
    if (checkUser !== findUserId)
      return res.status(403).send({
        status: false,
        msg: "User logged is not allowed to modify the requested users data",
      });
  } catch (err) {
    res.status(500).send({ msg: "err", err: err });
  }
  next();
};

module.exports.authenticate = authenticate;
module.exports.authorise = authorise;

const jwt = require("jsonwebtoken");
const authenticate = function(req, res, next) {
  let token = req.headers["x-auth-token"]
  if (!token) return res.send({ status: false, msg: "token must be present" })

  // ====[ Check Token Is Valid or not]
  let decodedToken = jwt.verify(token, "functionup-radon")
  if (!decodedToken) return res.send({ status: false, msg: "token is invalid" })

  next()
}


const authorise = function(req, res, next) {
  let token = req.headers["x-Auth-token"];
  let decodedToken = jwt.verify(token, "functionup-radon");
  let findUserId = decodedToken.userId 
  let checkUser = req.params.userId
  if (checkUser !== findUserId) 
  return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})
  next()
}

module.exports.authenticate =authenticate
module.exports.authorise =authorise

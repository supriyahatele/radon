const UserModel= require("../models/newUserModel");

const createuser= async function (req, res) {
let data= req.body
let mydata=req.header
console.log(mydata)
    let allUsers= await UserModel.create(data)
    res.send({allUsers })
}




module.exports.createuser =createuser
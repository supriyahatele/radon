const updateBookModels= require("../models/updateBookModels")

const updateBook= async function (req, res) {
    let data= req.body
    let savedData= await updateBookModels.create(data)
    res.send({msg: savedData})
}


module.exports.updateBook=updateBook
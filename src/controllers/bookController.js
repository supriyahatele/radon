const bookModel =require( "../models/bookModel")



const createBook= async function (req, res) {
    let data= req.body
    let savedData= await bookModel.create(data)
    res.send({msg: savedData})
}

const showBookData= async function (req, res) {
    let allUsers= await bookModel.find()
    res.send({msg: allUsers})
}

module.exports.createBook= createBook
module.exports.showBookData= showBookData
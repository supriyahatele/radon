const authorModels= require("../models/authorModels")
const updateBookModels= require("../models/updateBookModels")
// const updateBookController=require("../controllers/updateBookController")
const createAuthor= async function (req, res) {
    let data= req.body
    let savedData= await authorModels.create(data)
    res.send({msg: savedData})
}


const getBookByAuthor= async function(req, res){
    //  find will return array of object
    let BookByAuthor= await authorModels.find({ authorName : "Chetan Bhagat" }).select( "author_id")
  let data =await updateBookModels.find( {author_id:BookByAuthor[0].author_id})
res.send({msg: data})
}
//  it returns object
const getAuthor =async function(req, res){
let book = await updateBookModels.findOneAndUpdate( { bookName:"Two states" },{ $set:{ prices:100}},{ new:true})
let author= await  authorModels.find({author_id: book.author_id}).select("authorName")
 let price= book.prices
    res.send({msg:author,price })
}
// arra of object
// const findBook=async function(req, res){
// let Book=await updateBookModels.find( { prices : { $gte: 50, $lte: 100} } ).select({"author_id":1})
//     let authornamess = await authorModels.find({author_id:Book.map(ele=>ele.author_id)}).select({author_name:1, author_id:1, _id:0})
    
//     res.send({msg:authornamess})
//     }

const findBook=async function(req, res){
    let Book=await updateBookModels.find( { prices : { $gte: 50, $lte: 100} } ).select("author_id")
     const late=Book.map(ele => ele.author_id) 
     let temp = []
    
     for(let i=0;i<late.length;i++){
         let x = late[i]
         const author = await authorModels.find({ author_id:x}).select({authorName:1, _id:0})
         temp.push(author)
     }
     res.send({msg:temp })
    }

    const bookByAuthor =async function (req,res){
        let ab=req.body.author_id
let author= await  authorModels.find({ "author_id":ab})
let late = await updateBookModels.find({author_id :author[0].author_id}).select({bookName:1,_id:0})
res.send({msg:late }) 
    }
 const listOfAuthor= async function (req,res){
        let book = await authorModels.find({ $and:[{   age:{$gt: 50},rating: { $gt:4} }  ]  }).select({authorName:1,age:1, _id:0})
        res.send({msg:book})    
    }

module.exports.createAuthor =createAuthor
module.exports.getBookByAuthor=getBookByAuthor
module.exports.getAuthor=getAuthor
module.exports.findBook=findBook
module.exports.bookByAuthor =bookByAuthor
module.exports.listOfAuthor=listOfAuthor




// git branch -a assignmentmodule

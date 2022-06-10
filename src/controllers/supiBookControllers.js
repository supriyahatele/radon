  
  const supiAuthorModels = require("../models/supiAuthorModels")
const supiBookModel= require("../models/supiBookModels")
  
  
  const Book= async function (req, res) {
    let book = req.body
    // if(!book.author_id){
    //  return res.send( "this is mendatary")
    // }
    //  else{ 
      let bookCreated = await supiBookModel.create(book)
      res.send({data: bookCreated})
    
    }
    
    
  

    const getBooksWithAuthorPublisher = async function (req, res) {
      let Book = await supiBookModel.find().populate([{ path:'author_id'}, {path: 'publisher_id'}])
      res.send({data: Book})
  
  }
module.exports.Book=Book
module.exports.getBooksWithAuthorPublisher=getBooksWithAuthorPublisher
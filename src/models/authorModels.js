const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    authorName: String, 
    author_id:{ type:Number, required: true} ,
    age:Number,
    address:String
}, { timestamps: true });





// author_id:1,
// author_name:"Chetan Bhagat",
// age:25,
// address:"New delhi"


module.exports = mongoose.model('author', bookSchema)
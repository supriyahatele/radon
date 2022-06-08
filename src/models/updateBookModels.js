const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: String, 
    author_id:{ type:Number, required: true} ,
    prices: Number,
    rating:Number
}, { timestamps: true });

// { 
//     name:"Two states",
//     author_id:1,
//     price:50,
//     ratings:4.5,
// } ,

module.exports = mongoose.model('updateBook', bookSchema)
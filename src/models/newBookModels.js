const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: String, 
    authorName: String, 
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    tags: [String],
    stockAvailable : Boolean,
     year:Number,
    totalPages: Number,
}, { timestamps: true });


module.exports = mongoose.model('newBook', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover

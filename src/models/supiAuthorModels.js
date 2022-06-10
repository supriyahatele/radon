const mongoose =require("mongoose");
const authorSchema = new mongoose.Schema( {
    author_name: String,
    age:Number,
    address:String,
    rating: Number,
    author_id: String,
}, { timestamps: true });




module.exports = mongoose.model('supiAuthor', authorSchema)
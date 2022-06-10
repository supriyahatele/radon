const mongoose =require("mongoose");
const authorSchema = new mongoose.Schema( {
    
    name: String,
    headQuarter: String,
    publisher_id: String,

}, { timestamps: true });





module.exports = mongoose.model('supiPublisher', authorSchema)
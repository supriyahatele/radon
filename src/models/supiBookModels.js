const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId
// const supiBookModels=require('../models/supiBookModels');
const bookSchema = new mongoose.Schema( {
    name: String,
         author_id: {
            type: ObjectId,
            ref: "supiAuthor"
            },
            publisher_id: {
                type: ObjectId,
                ref: "supiPublisher"
                 },
    price: Number,
    ratings: Number


}, { timestamps: true });


module.exports = mongoose.model('supiBook', bookSchema)
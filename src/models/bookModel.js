const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {

    bookName:{ type:String,
        required: true
    }, 
    authorName: { type:String,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ["suspence and thriller", "action and romance",  "horror","self help","spiritual","Biography" ]
    },
    year:{
       type: Number,
       required: true,
    } 
    
}, { timestamps: true });

module.exports = mongoose.model('book', bookSchema) //users
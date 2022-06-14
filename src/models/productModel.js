const mongoose = require('mongoose');
const objectId= mongoose.Schema.Types.ObjectId
const bookSchema = new mongoose.Schema( {
   
    name:String,
	category:String,
	price: { type:Number ,
        required:true
    },
    productid:{
        types:objectId
    }
}, { timestamps: true });


module.exports = mongoose.model('product', bookSchema) //users

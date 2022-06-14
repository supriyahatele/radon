const mongoose = require('mongoose');
const objectId= mongoose.Schema.Types.ObjectId
const authorSchema = new mongoose.Schema( {
    userid:{type:objectId,
        ref:"newUser"
    },
	productid:{
        type:objectId,
        ref:"product"
    },
	amount: Number,
	isFreeAppUser: Boolean, 
	date:String

}, { timestamps: true });

module.exports = mongoose.model('order', authorSchema)

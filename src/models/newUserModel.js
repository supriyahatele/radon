const mongoose = require('mongoose');
const objectId= mongoose.Schema.Types.ObjectId
const userSchema = new mongoose.Schema( {
    Name: String,
	balance:{ type:Number, 
        default: 100
    },
	address:String,
	age:Number ,
 	gender:{type:String,  
        enum :["female","male","other"]
    },
	isFreeAppUser:
       {type: Boolean,
        default: false},
     userid:{
            types:objectId
            }


}, { timestamps: true });

module.exports = mongoose.model('newUser', userSchema) //users



// String, Number
// Boolean, Object/json, array
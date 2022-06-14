const productModel = require("../models/productModel");
const UserModel= require("../models/newUserModel");
const mid1= function ( req, res, next) {
  let data =req.headers.isfreeappuser
  console.log(data)
    if (data == null){
       return res.send(" request is missing a mandatory header")
    }
     next()  
}

const mid2=  async function ( req, res, next) {
    

        let data = req.body
    const data1 = req.body["userid"]
     const data2 = req.body["productid"]
     
      const ProductId = await productModel.findById(data1)
      const  UserId = await UserModel.findById(data2)
        if (ProductId==data2 && UserId==data1) {
            
            next()
        }else{
          res.send({ error: "invalid userId or productId" })
        }
        
        
    }



    

// const mid3= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid3")
//     next()
// }

// const mid4= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid4")
//     next()
// }

module.exports.mid1= mid1
module.exports.mid2= mid2
// module.exports.mid3= mid3
// module.exports.mid4= mid4

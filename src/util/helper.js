const printDate= function(){
    console.log("1/6/2022")
}
const getMonth= function(){
    console.log( "june")
}
const getBatchInfo = function(){
    console.log( "Roadon, W3D1, the topic for today is Nodejs module system")
}


module.exports.printDate=printDate
module.exports.getMonth = getMonth
module.exports.getBatchInfo =getBatchInfo
// const trim=function(){
//     const a= " sbdgsgsbdsggsgsvbg "
//   console.log (a.trim()) 
// }
//     const lower =function() {
//     let bc = "SAGSVSBHDHNDDHDHDHB"
//     console.log(bc.toChangeLowerCase())
// }
//  const upper =  function () {
//     let de = "hsydgbdshnjdjdmdj"
//     console.log(de.toChangeUpperCase())
// }
// module.exports.trim =trim
// module.exports.lower=lower
// module.exports.upper= upper
const d = function() {
    const mesg=" functionup"
    const mesg2="function up"
    const mesg3="FUNCTION UP"
    const trimFunc=mesg.trim();   
    const upperFunc=mesg2.toUpperCase()
    const lowerFunc=mesg2.toLowerCase()
    console.log(trimFunc)
    console.log(upperFunc)
    console.log(lowerFunc)

}
module.exports.d = d
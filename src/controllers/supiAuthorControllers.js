const supiAuthorModels= require('../models/supiAuthorModels');

const author= async function (req, res) {
    let author = req.body
    let authorCreated = await supiAuthorModels.create(author)
    res.send({data: authorCreated})
}


module.exports.author= author
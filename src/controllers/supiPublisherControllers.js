const supipublishModels= require('../models/supiPublisherModels');


const publish= async function (req, res) {
    let author = req.body
    let published = await supipublishModels.create(author)
    res.send({data: published})
}



module.exports.publish= publish
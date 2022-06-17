const express = require('express');
const bodyParser = require('body-parser');
// bodyparser is used to parse incoming bodies
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();
// (bodyParser.json())=only parses json data
app.use(bodyParser.json());
// it parses the complex data also responsible for parsing urls
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://supriyahatele:vE25ShJqu2IFbCtY@cluster0.qldb2.mongodb.net/test", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route)

// listen is a methos which creates listner on specified path/port
app.listen(3000, function () {
    console.log('Express app running on port ' + (  3000))
});

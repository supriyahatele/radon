const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')
const lodash = require('lodash');
// const _ = require("lodash")

const router = express.Router();

router.get('/test-me', function (req, res) {
    myHelper.printDate()
    myHelper.getCurrentMonth()
    myHelper.getCohortData()
    let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
    console.log('The first element received from underscope function is '+firstElement)
    res.send('My first ever api!')
});

router.get('/hello', function (req, res) {
    const arr=['january','february','march','april','may','june', 'july','august','september','october','november','december']
console.log(lodash.chunk(arr,3)) 

    const arr2= [1, 3,5,7,9,11,13,15,17,19]
    console.log( lodash.tail(arr2))

const a=[1,2,2,3,4,4,5]
const b=[1,2,2,3,4,4,5]
const c=[1,2,2,3,4,4,5]
const e=[1,2,2,3,4,4,5]
const f=[1,2,2,3,4,4,5]
console.log(lodash.union(a,b,c,e,f))


const obj= [["horror","The Shining"], ["drama","titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
console.log(lodash.fromPairs(obj))
    res.send("done")
});
router.get('/sol1', function(req,res){
  
       //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
	   let arr= [1,2,3,5,6,7]
	   let missingNumber
	   ///LOGIC WILL GO HERE 
       for (i=0;i<arr.length-1;i++){
if( arr[i]+1 !=arr[i+1]){
    missingNumber=arr[i]+1
	   res.send(  { data: "the missing number is"+ missingNumber  }  );
}
}
})

router.get("/sol2", function (req, res) {
    //logic : sum of n consecutive numbers is [ n * (first + last) / 2  ]..so get sum of all numbers in array. now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing
    let arr1= [33, 34, 35, 37, 38]
    let missingNumber
    for (i=0;i<arr1.length-1;i++){
        if( arr1[i]+1 !=arr1[i+1]){
  missingNumber = arr1[i]+1
        
    res.send(  { data:  "the missing no is" + missingNumber  }  );
        }
    }
    
});



const arr =[ "Rang de basanti" , "The shining", "Lord of the rings", "Batman begins"] 

router.get('/movies', function (req, res) {
     res.send({arr})
});

router.get('/movies/:indexNumber', function (req, res) {
   
    let num= req.params.indexNumber
    if(num >=Array.length){
        console.log(" use a valid index in an error message.")
    }
    res.send( { movie: "the movie is" + arr[num] })
 } );


 router.get('/films',function(req,res){
    let values=[ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]
     
  
       res.send(values) 
       console.log("done") 
 })

 
 router.get('/films/:filmId',function(req,res){
    const films=[ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]
     
       let fil= films[req.params.filmId -1]
       if(fil!== films.length){
        res.send(fil ||" no movie exits")
       }     
 })
 
 router.post('/players', function( req,res){
    let player =
    [
        {
            "name": "manish",
            "dob": "1/1/1995",
            "gender": "male",
            "city": "jalandhar",
            "sports": [
                "swimming"
            ]
        },
        {
            "name": "gopal",
            "dob": "1/09/1995",
            "gender": "male",
            "city": "delhi",
            "sports": [
                "soccer"
            ]
        },
        {
            "name": "lokesh",
            "dob": "1/1/1990",
            "gender": "male",
            "city": "mumbai",
            "sports": [
                "soccer"
            ]
        },
    ]
   
    let ele= req.body.data
   player.push(ele)

    res.send({ data: player , status: true })
 });

router.get('/candidates', function(req, res){
    console.log('Query paramters for this request are '+JSON.stringify(req.query))
    let gender = req.query.gender
    let state = req.query.state
    let district = req.query.district
    console.log('State is '+state)
    console.log('Gender is '+gender)
    console.log('District is '+district)
    let candidates = ['Akash','Suman']
    res.send(candidates)
})

router.get('/candidates/:canidatesName', function(req, res){
    console.log('The request objects is '+ JSON.stringify(req.params))
    console.log('Candidates name is '+req.params.canidatesName)
    res.send('Done')
})


module.exports = router;
// adding this comment for no reason
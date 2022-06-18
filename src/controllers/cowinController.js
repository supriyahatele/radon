let axios = require("axios");

let getStates = async function (req, res) {
  try {
    let options = {
      method: "get",
      url: "https://cdn-api.co-vin.in/api/v2/admin/location/states",
    };
    let result = await axios(options);
    console.log(result);
    let data = result.data;
    res.status(200).send({ msg: data, status: true });
   }catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};

// ======================================[get districts]===============================================
let getDistricts = async function (req, res) {
  try {
    let id = req.params.stateId;
    let options = {
      method: "get",
      url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`,
    };
    let result = await axios(options);
    console.log(result);
    let data = result.data;
    res.status(200).send({ msg: data, status: true });
   }catch(err){
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};
// ===================================[get pincode]==================================================
let getByPin = async function (req, res) {
  try {
    let pin = req.query.pincode;
    let date = req.query.date;
    console.log(`query params are: ${pin} ${date}`);
    var options = {
      method: "get",
      url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`,
    };
    let result = await axios(options);
    console.log(result.data);
    res.status(200).send({ msg: result.data });
   }catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};
// ================================= [getOtp]====================================================
let getOtp = async function (req, res) {
  try {
    

    console.log(`body is : ${blahhh} `);
    var options = {
      method: "post",
      url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
      data: blahhh,
    };

    let result = await axios(options);
    console.log(result.data);
    res.status(200).send({ msg: result.data });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};
// =====================================[getdistrict by id]================================================
const getDistrict = async function (req, res) {
  try {
    let id = req.query.district_id;
    let date = req.query.date;
    var option = {
      method: "get",
      url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${id}&date=${date}`,
    };

    let result = await axios(option);
    res.status(200).send({ mgs: result.data });
  } catch (err) {
    res.status(500).send({ msg: err.massage });
  }
};
// ==================================[get weather of london]===================================================
const weather = async function (req, res) {
  try {
    let id = req.query.q;
    let date = req.query.appid;
    var option = {
      method: "get",
      url: `http://api.openweathermap.org/data/2.5/weather?q=${id}&appid=${date}`,
    };

    let result = await axios(option);
    console.log(result.data);
    res.status(200).send({ temp: result.data.main.temp });
  } catch (err) {
    res.status(500).send({ msg: err.massage });
  }
};

const onlyweather = async function (req, res) {
    try {
      let id = req.query.q;
      let date = req.query.appid;
      var option = {
        method: "get",
        url: `http://api.openweathermap.org/data/2.5/weather?q=${id}&appid=${date}`,
      };
  
      let result = await axios(option);
      console.log(result.data);
      res.status(200).send({ temp: result.data });
    } catch (err) {
      res.status(500).send({ msg: err.massage });
    }
  };

// ===================================[sort cities by temp]==================================================
let getSortedCities = async function (req, res) {
  try {
    let cities = [
      "Bengaluru",
      "Mumbai",
      "Delhi",
      "Kolkata",
      "Chennai",
      "London",
      "Moscow",
    ];
    let citiesArr = [];

    for (i = 0; i < cities.length; i++) {
      let object = { city: cities[i] };
      let options = {
        method: "get",
        url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=392aaf225dbecba5fb9546604a0f4f51`,
      };
      let result = await axios(options);
      console.log(result.data.main.temp);
      object.temp = result.data.main.temp;
      citiesArr.push(object);
    }

    let sorted = citiesArr.sort(function (a, b) {
      return a.temp - b.temp;
    });
    console.log(sorted);
    res.status(200).send({ status: true, data: sorted });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};

const getmemes = async function (req, res) {
    try {
     
      let options = {
        method: "get",
        url: `https://api.imgflip.com/get_memes`,
      };
      let result = await axios(options);
      res.status(200).send({ msg: result.data });
    } catch (err) {
      console.log(err);
      res.status(500).send({ msg: err.message });
    }
  };

// ========================================[get meme]=======================
const meme = async function (req, res) {
  try {
    let id = req.query.template_id;
    let text1 = req.query.text0;
    let text2 = req.query.text1;
    let username = req.query.username;
    let password = req.query.password;
    let options = {
      method: "post",
      url: `https://api.imgflip.com/caption_image?template_id=${id}&text0=${text1}&text1=${text2}&username=${username}&password=${password}`,
      headers: [],
    };
    let result = await axios(options);
    res.status(200).send({ msg: result.data });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};
module.exports.getStates = getStates;
module.exports.getDistricts = getDistricts;
module.exports.getByPin = getByPin;
module.exports.getOtp = getOtp;
module.exports.getDistrict = getDistrict;
module.exports.weather = weather;
module.exports.onlyweather=onlyweather
module.exports.getSortedCities = getSortedCities;
module.exports.meme = meme;
module.exports.getmemes=getmemes
// var request = require("request-promise");
const express = require('express');
const router = express.Router();
const request = require('request');

// const arraysum = async (req, res, next) => {
//   // This variable contains the data
//   // you want to send
//   var data = {
//     array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//   };

//   var options = {
//     method: "POST",

//     // http:flaskserverurl:port/route
//     uri: "http://127.0.0.1:5000/pyserver",
//     body: data,

//     // Automatically stringifies
//     // the body to JSON
//     json: true,
//   };

//   var sendrequest = await request(options)
//     // The parsedBody contains the data
//     // sent back from the Flask server
//     .then(function (parsedBody) {
//       console.log(parsedBody);

//       // You can do something with
//       // returned data
//       const result = parsedBody["result"];
//       console.log("Sum of Array from Python: ", result);
//       res.send({ result: result });
//     })
//     .catch(function (err) {
//       console.log(err);
//     });
//   return sendrequest;
// };

// const axios = require('axios');
// const { response } = require('express');
// const url = "http://127.0.0.1:5000/pyserver";
// axios.get(url, {
//   headers : {
//     'Content-Type' : 'application/json',
//   }
// }).then(response => {
//   console.log(response.data);
// }).catch(error => {
//   console.log("error: " + error);
// });

router.get('/', function(req, res, next) {
  var url = "http://127.0.0.1:5000/pyserver";
  request(url, function(error, response, body) {
    console.log(body);
  });
  res.render('test');
});

module.exports = router;
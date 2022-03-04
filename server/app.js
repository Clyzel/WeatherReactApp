// importing express.js module
const express = require('express');
let request = require("request");
//create an object of the express module
const app = express();
//set the port to 3000
const port = 3000;

//Below the OpenWaether URL placed in a variable (to make code cleaner)

 const URL = "https://api.openweathermap.org/data/2.5/forecast?lat=32.7762719&lon=-96.7968559&appid=363d4ee1b6b5ac1fb24bc94bdf4488a8&units=imperial&cnt=5";


//Routing goes here....
/*Below my get request for my http://localhost:3000/dallasforecast page, I'm requesting my
 URL variable that has the api address in it. The if statement means
 If no error and response code is sucessful the send the response (the json) to the body of my page*/

app.get("/dallasforecast", (req, res) => {
  request(
    URL,
    function(error, response, body) {
      if (!error && response.statusCode == 200) {
        res.send(body);

      }
    }
  );
});




//make the server listen on port number
app.listen(port, () => {
console.log(`App is listening at http://localhost:${port}`);
});

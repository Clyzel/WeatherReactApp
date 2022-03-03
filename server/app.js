// importing express.js module
const express = require('express');
let request = require("request");
//create an object of the express module
const app = express();
//set the port to 3000
const port = 3000;


 const URL = "https://api.openweathermap.org/data/2.5/forecast?lat=32.7762719&lon=-96.7968559&appid=363d4ee1b6b5ac1fb24bc94bdf4488a8&units=imperial&cnt=5";


//Routing goes here....

app.get("/api", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

// app.get("/newEndpoint", (req, res) => {
//   res.json({ message: "This is the new endpoint" });
// });

app.get("/dallasforecast", (req, res) => {
  request(
    URL,
    function(error, response, body) {
      if (!error && response.statusCode == 200) {
        let parsedbody = JSON.parse(body);
        let temp = parsedbody["list"]["main"]["temp"];
        res.send({temp});

      }
    }
  );
});




//make the server listen on port number
app.listen(port, () => {
console.log(`App is listening at http://localhost:${port}`);
});

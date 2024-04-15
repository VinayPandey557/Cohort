const express = require("express");

const app = express();

const users = [{
    name: "John",
    kidneys: [{
        healthy: false
    }]
}];

app.get("/", function(req, res){
    const johnKidneys = users[0].kidneys;
    console.log(johnKidneys);
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;
    for(let i =0; i<johnKidneys.length; i++){
        if(johnKidneys[i].healthy){
           numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
           }
        }
        const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
        res.json({
        johnKidneys, 
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
      })
})
app.listen(5000);
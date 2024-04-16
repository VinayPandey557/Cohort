const express = require("express");



const app = express();

function userMiddleware(req, res, next){
    if(username != "harkirat" && password != "pass"){
        res.status(403).json({
            msg: "Incorrect input",
        });
    } else {
        next();
    }
};

function kidneyMiddleware(req, res, next){
    if(kidneyId != 1 && kidneyId != 2){
        res.status(403).json({
            msg: "Incorrect input",
        })

    }
    else {
        next();
    }
};

app.get("/healthy-checkup", userMiddleware, kidneyMiddleware, function(req, res){
    res.send("Your heart is healthy");

});

app.get("/kidney-check", userMiddleware, kidneyMiddleware, function(req, res){
    res.send("Your heart is healthy");
});

app.get("/heart-check", userMiddleware, function(req, res){
    res.send("Your heart is healthy");
});

app.listen(5000);
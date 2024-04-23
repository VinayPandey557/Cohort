const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";



const app = express();

app.use(express.json());

const ALL_USRS = [
    {
        username: "harkirat@gmail.com",
        password: '123',
        name: "harkirat"
    },
    {
        username: "vinay@gmail.com",
        password: '123',
        name: "Vinay"
    },
    {
        username: "monu@gmail.com",
        password: '123',
        name: "Monu"
    },
];


function userExists(username, password) {
  const userExists= false;
   for(let i =0; i< ALL_USRS.length; i++){
    if(ALL_USRS[i].username == username && ALL_USRS.password == password){
        userExists = true;
    }
   }
   return userExists;
}



app.post("/signin", function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    if(!userExists(username, password)){
        return res.status(403).json({
            msg: "User doesnt exist in our in memory db",
        });
    }
    var token = jwt.sign({ username: username}, jwtPassword)
       return res.json({
        token,
       });

});


app.get("/users", function(req, res) {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;

    res.json({
        users: ALL_USRS.filter(function(value){
        if(value.username == username){
            return false
        } else {
            return true;
        }
        })
    })
   
});

app.listen(3000);


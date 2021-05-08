const express = require('express');
const app = express();

app.listen(3000, function(){
    console.log("server starts on port 3000");
});

app.get("/index", function(req, res){
    res.sendFile(__dirname + "/index.html");
})
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set('view engine', 'ejs');

app.get("/", function(req ,res){
    const date = new Date();
    const day = date.getDay();
   
    var currentDay = "";
    
    switch(day){
        case 0:
            currentDay = "Sunday";
            break;
        case 1:
            currentDay = "Monday";
            break;
        case 2:
            currentDay = "Tueday";
            break;

        case 3:
            currentDay = "Wednesday";
            break;

        case 4:
            currentDay = "Thrusday";
            break;

        case 5:
            currentDay = "Friday";
            break;

        case 6:
            currentDay = "Saturday";
            break;

    }

    res.render("list", {kindOfDay: currentDay});


   
});


app.listen(3000, function(){
    console.log("server is up at port 3000");
});
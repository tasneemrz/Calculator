const express = require("express");
const bodyParser = require("body-parser");
const res = require("express/lib/response");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use('/css', express.static('css'));



// The first page 
app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = (num1 + num2);

    res.send("The result of the calculation is: " + result);
});


// The bmi calculator page
app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function(req, res){
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var result =  weight / (Math.pow(height, 2));
    res.send("Your BMI is: " + result);
});


app.listen(3000, function(){
    console.log("Server started on port 3000");
});

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require("mongoose");

var publicDir = require('path').join(__dirname,'/public');
app.use(express.static(publicDir));

mongoose.connect("mongodb://localhost/todo");

app.set("view engine","ejs");



app.use(bodyParser.urlencoded({extended: true}));

var todoSchema = new mongoose.Schema({
name: String
});

var Todo = mongoose.model("Todo", todoSchema);

app.get("/",function(req, res){
    Todo.find({}, function(err, todoList){
        if (err) 
                console.log("error");
        else{
            
                res.render("index.ejs", {todoList: todoList});
        }
    })
    
});

app.post("/newtodo", function(req,res){
    console.log("Item submitted!");
    var newItem = new Todo({
        name: req.body.item
    });
    Todo.create(newItem,function(err, Todo){
        if(err) 
            console.log(err);
        else{
            console.log("Inserted Item: " + newItem);
        }
    })
    res.redirect("/");
});

app.get("*",function(req, res){
    res.send("<h1>invalid URL</h1>");
});


app.listen(3000, function(){
    console.log("server 3000");
});

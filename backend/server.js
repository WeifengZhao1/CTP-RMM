const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
require('dotenv').config()
const app = express();

const port = process.env.NODE_ENV_PORT || 5000 
console.log(process.env.HOST);
//creating the connection to database
const connection = mysql.createConnection({
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database: process.env.DB,
    port: process.env.PORT
})


//create a connection
connection.connect((err)=>{
    if(err)
    console.log(err);
    else
    console.log('succesfuly connected');
})


//starting point for all get and posts
var corsOptions = {
    origin:'http://localhost:5000'

}

//set starting point for http requests
app.use(cors(corsOptions))

// Middleware that lifts the cors restriction for routing from a diffrent url to the server url
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-origin', '*');
    next();
  })
  

//ROUTES
// show all columns from table reviews
app.get('/getreviews',(req,res)=>{
    const SELECT= 'SELECT * FROM reviews';
    connection.query(SELECT,(err,results)=>{
        if(err){
            res.send(err);
            return console.log(err);
            }
            else 
            return res.json({
                data:results
            });
    })
})


//delete something
app.get('/delete/:id',(req,res)=>{
    const id = req.params.id;

    const DELETE = `DELETE FROM reviews WHERE id = '${id}'`;
    
    connection.query(DELETE,(err,results)=>{
        if(err){
        res.send(err);
        return console.log(err);
        }
        else 
        return res.json({
            data:results,
            message:`column ${id} succesfully deleted`

        });
})
})


// add a review
app.get('/add/:name/:school/:major/:feedback',(req,res)=>{
    const name = req.params.name;
    const school = req.params.school;
    const major = req.params.major;
    const feedback = req.params.feedback;
    
    const INSERT = `INSERT INTO reviews(name,school,major,feedback) VALUES ('${name}','${school}','${major}','${feedback}')`;

    connection.query(INSERT,(err,results)=>{
            if(err){
            res.send(err);
            return console.log(err);
            }
            else 
            return res.json({
                data:results
            });
    })
})

//display all reviews with passed in major only 
app.get('/getbymajor/:major',(req,res)=>{
    const major = req.params.major;
    const SELECT = `SELECT * FROM reviews where major ILIKE '%${major}%'`;

    connection.query(SELECT,(err,results)=>{
        if(err){
            res.send(err);
            return console.log(err);
        }
        else{
            return res.json({
                data:results,
                message:` ${major} successfully displayed`

            })
        }
    })
})


//listen
app.listen(port,()=>{
    console.log("app is listening on port:"+port);
})


const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
require('dotenv').config()
const app = express();


//allows the use of body parser
app.use(express.json()) 
app.use(express.urlencoded({ extended: true })) 


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


//use cors
app.use(cors())

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
    
    const DELETE = `DELETE FROM reviews WHERE id = ?`;
    
    connection.query(DELETE,[id],(err,results)=>{
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

//add a review 
app.post('/addreview',(req,res) => {
    const name = req.body.name;
    const school = req.body.school;
    const major = req.body.major;
    const feedback = req.body.feedback;
    
    //save to database this is asychronous returns a promise
    const INSERT = `INSERT INTO reviews (name,school,major,feedback) VALUES (?,?,?,?)`;

    connection.query(INSERT,[name,school,major,feedback],(err,results)=>{
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

// // add a review
// app.get('/add/:name/:school/:major/:feedback',(req,res)=>{
    
//     const name = req.params.name;
//     const school = req.params.school;
//     const major = req.params.major;
//     const feedback = req.params.feedback;
    
//     const INSERT = `INSERT INTO reviews (name,school,major,feedback) VALUES (?,?,?,?)`;

//     connection.query(INSERT,[name,school,major,feedback],(err,results)=>{
//             if(err){
//             res.send(err);
//             return console.log(err);
//             }
//             else 
//             return res.json({
//                 data:results
//             });
//     })
// })

//display all reviews with passed in major only 
app.get('/getbymajor/:major',(req,res)=>{

    const major = req.params.major;
    const SELECT = `SELECT * FROM reviews where major LIKE ?`;

    connection.query(SELECT,[major],(err,results)=>{
        
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
    console.log("app is listening on port:"+ port);
})


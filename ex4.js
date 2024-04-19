//Create a /weird route that passes name and title parameters to the app and prints the name and title parameters to the screen.

//Answer
const express = require('express')
const app = express()
const port = 3000
app.listen(port,()=>{
    console.log('runing');
})
app.get('/weird',(req,res)=>{
    const name = req.query.name;
    const title = req.query.title;

    res.send(`Hello, ${title} ${name}!`);
})
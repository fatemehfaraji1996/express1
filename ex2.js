//Q2. Create a route that redirects to '/about'

//Answer
const express = require('express')
const app=  express()
const Port = 3000
app.listen(Port,()=>{
    console.log('your port is runing');
})
app.get('/about',(req,res)=>{
    res.send('welcome')
})

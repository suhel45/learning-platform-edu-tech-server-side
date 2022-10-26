const express = require('express');
const app = express();
const port = process.env.PORT || 5000

const categories = require('./data/courseCategories.json')
const courses = require('./data/courseDetails.json');


app.get('/',(req,res)=>{
    res.send('hello world!!!!!')
})
app.get('/categoris',(req,res)=>{
    res.send(categories);
})
app.get('/courses',(req,res)=>{
    res.send(courses);
})

app.listen(port,()=>{
    console.log(`server runnig at ${port}`)
})
const express = require('express');
const app = express();
const port = process.env.PORT || 5000

const categories = require('./data/courseCategories.json')


app.get('/',(req,res)=>{
    res.send('hello world!!!!!')
})
app.get('/categoris',(req,res)=>{
    res.send(categories);
})

app.listen(port,()=>{
    console.log(`server runnig at ${port}`)
})
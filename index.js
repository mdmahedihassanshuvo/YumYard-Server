const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
app.use(cors());

const chefData = require('./data/chef.json')
const foodData = require('./data/food.json')

app.get('/', (req,res) =>{
    res.send('Welcome to server!');
})
app.get('/chefData', (req,res) =>{
    res.send(chefData);
})

app.get('/foodData', (req,res) =>{
    res.send(foodData);
})

app.get('/chefData/:id', (req,res) =>{
    const id = parseInt(req.params.id);
    const foodItem = chefData.find(item => parseInt(item.id) === id);
    res.send(foodItem);
})

app.listen(port, ()=>{
    console.log(`server listening on ${port}`)
})
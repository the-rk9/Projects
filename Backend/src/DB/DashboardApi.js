const express = require('express'); 
require('./Config');
const Data = require('./DatabaseSchema');
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());

app.get('/list',async(req,resp)=>{
    let data = await Data.find().limit(5);
    console.log(data);
    resp.send(data);
})
app.listen(PORT);

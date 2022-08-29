const express = require('express'); 
require('../DB/Config');
const Data = require('../DB/DatabaseSchema');
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());

app.post("/create",async(req,resp)=>{
    let data = new Data(req.body);
    let result =  await data.save();
    console.log(result);
    resp.send(result);
});

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});
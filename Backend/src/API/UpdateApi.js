const express = require('express'); 
require('../DB/Config');
const Data = require('../DB/DatabaseSchema');
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());

app.put('/update/:_id',async(req,resp)=>{
    console.log(req.params);
    let data = await Data.updateOne(
    req.params,
    {$set:req.body});
    resp.send(data);
})

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});
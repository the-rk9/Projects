const mongoose = require('mongoose');

const cryptoSchema = new mongoose.Schema({
    id:String, 
    symbol:String, 
    rank:String, 
    name:String, 
    supply:String, 
    maxSupply:String, 
    marketCapUsd:String, 
    volumeUsd24Hr:String, 
    priceUsd:String, 
    changePercent24Hr:String, 
    vwap24Hr:String, 
    explorer:String

});

module.exports = mongoose.model('data',cryptoSchema);
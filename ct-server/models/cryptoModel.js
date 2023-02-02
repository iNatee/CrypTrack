const mongoose = require('mongoose')

const cryptoSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Required']
    },
    symbol: {
        type: String,
        required: [true, 'Required']
    },
    priceVsGBP: {
        type: String,
        required: [true, 'Required']
    },
    amountOwned: {
        type: String,
        required: [true, "Required"]
    },
    amountOwnedInGBP: {
        type: String,
        required: [true, "Required"]
    }
    }, 
    {
        timestamps:true,
    }
)

module.exports = mongoose.model('Crypto', cryptoSchema)
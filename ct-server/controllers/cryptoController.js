const asyncHandler = require('express-async-handler')

const Crypto = require('../models/cryptoModel')

//GET ALL crypto
//@route GET /api/routes
const getCryptos = asyncHandler(async (req, res) => {
    const cryptos = await Crypto.find()
    res.status(200).json(cryptos)
})

//GET crypto
//@route GET /api/routes/:id
const getCrypto = asyncHandler(async (req, res) => {
    const crypto = await Crypto.findById(req.params.id)

    if(!crypto) {
        res.status(400)
        throw new Error ('Crypto not found')
    }
    res.status(200).json(crypto)
})

//PUT crypto
//@route PUT /api/routes/:id
const updateCrypto = asyncHandler(async (req, res) => {
    const crypto = await Crypto.findById(req.params.id)

    if(!crypto) {
        res.status(400)
        throw new Error ('Crypto not found')
    }
    const updatedCrypto = await Crypto.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    res.status(200).json({message: `Updated crypto with ID ${updatedCrypto}`})
})

//POST crypto
//@route POST /api/routes
const createCrypto = asyncHandler(async (req, res) => {
    
    if(!req.body){
        res.status(400)
        throw new Error('No data found' )
    }

    const newCrypto = await Crypto.create( {
        name: req.body.name,
        symbol: req.body.symbol,
        priceVsGBP: req.body.priceVsGBP,
        amountOwned: req.body.amountOwned,
        amountOwnedInGBP: req.body.amountOwnedInGBP,
    })

    res.status(200).json(newCrypto)

})

//DELETE crypto
//@route DELETE /api/routes/:id
const deleteCrypto = asyncHandler(async (req, res) => {
    await Crypto.findByIdAndDelete(req.params.id)

    if(!req.params.id) {
        res.status(400)
        throw new Error ('Crypto not found')
    }

    res.status(200).json({id: req.params.id})
})

//Exports
module.exports = {
    getCryptos, 
    getCrypto, 
    updateCrypto, 
    createCrypto, 
    deleteCrypto
}
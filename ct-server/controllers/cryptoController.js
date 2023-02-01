const asyncHandler = require('express-async-handler')

const Crypto = require('../models/cryptoModel')

//GET ALL crypto
//@route GET /api/routes
//@access Private
const getCryptos = asyncHandler(async (req, res) => {
    const cryptos = await Crypto.find()
    res.status(200).json(cryptos)
})

//GET crypto
//@route GET /api/routes/:id
//@access Private
const getCrypto = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Get crypto with ID ${req.params.id}`})
})

//PUT crypto
//@route PUT /api/routes/:id
//@access Private
const updateCrypto = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Update crypto with ID ${req.params.id}`})
})

//POST crypto
//@route POST /api/routes
//@access Private
const createCrypto = asyncHandler(async (req, res) => {
    if(req.body.text){
        res.status(200).json({message: `Create crypto`})
    } else {
        res.status(400)
        throw new Error('No data found' )
    }
})

//DELETE crypto
//@route DELETE /api/routes/:id
//@access Private
const deleteCrypto = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete crypto with ID ${req.params.id}`})
})

module.exports = {
    getCryptos, 
    getCrypto, 
    updateCrypto, 
    createCrypto, 
    deleteCrypto
}
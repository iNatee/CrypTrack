//GET ALL crypto
//@route GET /api/routes
//@access Private
const getCryptos = (req, res) => {
    res.status(200).json({message: 'Get all cryptos via controller'})
}

//GET crypto
//@route GET /api/routes/:id
//@access Private
const getCrypto = (req, res) => {
    res.status(200).json({message: `Get crypto with ID ${req.params.id}`})
}

//PUT crypto
//@route PUT /api/routes/:id
//@access Private
const updateCrypto = (req, res) => {
    res.status(200).json({message: `Update crypto with ID ${req.params.id}`})
}

//POST crypto
//@route POST /api/routes
//@access Private
const createCrypto = (req, res) => {
    if(req.body.text){
        res.status(200).json({message: `Create crypto`})
    } else {
        res.status(400)
        throw new Error('No data found' )
    }
}

//DELETE crypto
//@route DELETE /api/routes/:id
//@access Private
const deleteCrypto = (req, res) => {
    res.status(200).json({message: `Delete crypto with ID ${req.params.id}`})
}

module.exports = {
    getCryptos, 
    getCrypto, 
    updateCrypto, 
    createCrypto, 
    deleteCrypto
}
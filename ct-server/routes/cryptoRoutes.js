const express = require('express')
const router = express.Router()
const { getCrypto, getCryptos, createCrypto, updateCrypto, deleteCrypto } = require("../controllers/cryptoController")

//GET ALL records
router.get('/', getCryptos)

//GET ONE record using ID
router.get('/:id', getCrypto)

//POST ONE record
router.post('/', createCrypto)

//UPDATE ONE record using ID
router.put('/:id', updateCrypto)

//DELETE ONE record using ID 
router.delete('/:id', deleteCrypto)

module.exports = router
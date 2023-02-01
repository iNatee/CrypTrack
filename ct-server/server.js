const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const port = process.env.PORT
const en = process.env.NODE_ENV
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./db')

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/api/crypto', require('./routes/cryptoRoutes')) 
app.use(errorHandler)

app.listen(port, () => console.log(`Server running on Port ${port}`))

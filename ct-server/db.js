const { connect } = require('http2')
const mongoose = require('mongoose')
const { exit } = require('process')
const URI = require("../db-conn")
const MONGO_URI = "mongodb+srv://NathanM:Hunter157@cryptrack.3sov5am.mongodb.net/?retryWrites=true&w=majority"

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(MONGO_URI)
        console.log(`MongoDB Connected: ${MONGO_URI}`.cyan.underline);
    } catch(error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB
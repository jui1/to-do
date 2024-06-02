const mongoose = require("mongoose")

const TODOSCHEMA = new mongoose.Schema({
    task: String
})

const TODOMODEL = mongoose.model("todo" ,TODOSCHEMA)

module.exports = TODOMODEL 
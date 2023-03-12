const mongoose = require('mongoose')


// This method was adapted from the IIE lab Guide (APDS7311) 2022
// The Independent Institute of Education. 2022. Application development security APDS7311 Lab Guide 2022 (First Edition:2021)

const fruitschema = mongoose.Schema(
{
id:{type: String, required:true},
name: {type: String, required:true},
}
)
module.exports = mongoose.model('Fruit', fruitschema)
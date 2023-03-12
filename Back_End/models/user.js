const mongoose = require('mongoose')

// This method was adapted from the IIE lab Guide (APDS7311) 2022
// The Independent Institute of Education. 2022. Application development security APDS7311 Lab Guide 2022 (First Edition:2021)

const userschema = mongoose.Schema(

{
username: {type:String, required:true},
password: {type:String, required:true},
token: { type: String },
}
)

module.exports = mongoose.model('User', userschema)


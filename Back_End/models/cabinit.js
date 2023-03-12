const mongoose = require('mongoose')

const cabinitschema = mongoose.Schema(
{
id:{type: String, required:true},
name: {type: String, required:true},
type: {type: String},

}
)
module.exports = mongoose.model('cabinit', cabinitschema)
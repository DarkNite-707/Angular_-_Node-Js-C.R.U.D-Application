
const mongoose = require('mongoose')

const postschema = mongoose.Schema(
{
id:{type: String, required:true},
name: {type: String, required:true},
// type: {type: String},

}
)
module.exports = mongoose.model('Post', postschema)
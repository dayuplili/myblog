var mongoose = require('../server/db');
var Schema = mongoose.Schema;

var blogSchema = new Schema({
    title:{type:String},
    content:{type:String},
    type:{type:String}
});

module.exports = mongoose.model('blog',blogSchema);
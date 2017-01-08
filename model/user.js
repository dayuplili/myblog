var mongoose = require('../server/db');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username:{type:String},
    password:{type:String}
});

module.exports = mongoose.model('user',userSchema);
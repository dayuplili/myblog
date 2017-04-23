var mongoose = require('../server/db');
var Schema = mongoose.Schema;

var userinfoSchema = new Schema({
    name:{type:String},
    nickname:{type:String},
    email:{type:String},
    tel:{type:String}
});

module.exports = mongoose.model('userinfo',userinfoSchema);
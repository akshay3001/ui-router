// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
var userModel = new Schema({     
    email: {
        type:String,
        required: true,
        unique: true
    },
   	userName: { 
   		type: String, 
   		unique: true
   	},
    password: {
        type:String,
        required: true
    },
    created : { type : Date, default : Date.now } 

});


var User = mongoose.model( 'User', userModel );

module.exports = User;

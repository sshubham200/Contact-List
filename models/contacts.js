const mongoose = require('mongoose');

var contactSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    }
});

const Contact = mongoose.model('Contact',contactSchema);

module.exports = Contact;
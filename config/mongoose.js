//require the library
const { connect } = require('mongodb');
const mongoose= require('mongoose');

//connect to the database
 mongoose.connect('mongodb+srv://Shubha_m:Enter_123@cluster0.wcolq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true });

//acquire the connection(to check it is successful)
const db = mongoose.connection;

//error
db.on('error',console.error.bind(console,'error connecting to db'));

//up and running the print the message
db.once('open',function(){
    console.log('Successfully connected to the server')
});
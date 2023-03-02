const express = require('express');
const port = process.env.PORT || 8000;
const path = require('path');

const db = require('./config/mongoose');
const Contact = require('./models/contacts');

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.static('assets'));

var ContactList= [
    {
        name: "Person1",
        contact: "6814416976",
    },
    {
        name: "Person2",
        contact: "9743931670",
    },
    {
        name: "Person3",
        contact: "0712952910",
    }
]

app.get('/delete-contact/',function(req,res){
    let id= req.query.id;
   Contact.findByIdAndDelete(id,function(err){
       if(err){
           console.log('error in deleting contact');
           return;
       }
    return res.redirect('back');
   });
});

app.get('/',function(req,res){

    Contact.find({}, function(err, contacts){
        if(err){
            console.log('Error in fetching contacts from db');
            return;
        }

    return res.render('home',{
        title: "Contact List",
        contact_list: contacts
    });

    });
});

app.post('/create',function(req,res){
    // ContactList.push(req.body);
    // return res.redirect('/');
    Contact.create({
        name:req.body.name,
        contact:req.body.contact
    },function(err,newContact){
        if(err){console.log('erroe in creating cotact');
    return ;}
    console.log('********',newContact);
    return res.redirect('back');
    }
    );
});

app.set('view engine', 'ejs');
app.set ('views',path.join(__dirname,'views'));
app.get('/practice',function(req,res){
    return res.render('practice',{title:"Practice"});
})
app.listen(port,function(err){
    if(err){
        console.log('Error',err);
        return;
    }
    console.log('My express server is running on port: ',port,);
});
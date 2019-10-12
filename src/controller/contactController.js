const db = require('../database/database');
const validator = require('validator')

let ctr = {}

ctr.homeController = (req,res)=>{
    db.ref('contact').once('value',(snapshot)=>{
        let data = snapshot.val()
        res.render('index',{ contact : data});
    })
}

ctr.createController = (req,res)=>{
    let newContact = {
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        email : req.body.email,
        phone : req.body.phone
    }
    let error;
    if(validator.isNumeric(req.body.phone)){
        if(validator.isEmail(req.body.email)){
            db.ref('contact').push(newContact)
        }
        else{
            error = 'Email not is valid'
        }
    }else{
        error = 'Phone not is valid'
    }
    
    
     res.redirect('/');
}

ctr.delete = (req,res) =>{
    db.ref('contact/'+req.params.id).remove()
    res.redirect('/'); 
}

module.exports = ctr;
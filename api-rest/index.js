'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3977;
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/CPSDB', (err,res) =>{
  if(err){
    throw err;
  }else{
    console.log('la base de datos esta corriendo correctamente');
    app.listen(port, function(){
    console.log('Puerto Corriendo en localhost:'+port);
    });
  }
});

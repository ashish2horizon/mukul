
/* mongoose = require('mongoose')

 const DBconfig = {
     DB: 'mongodb://vik80sh:vik80sh@cluster0-shard-00-00-lhkd1.mongodb.net:27017,cluster0-shard-00-01-lhkd1.mongodb.net:27017,cluster0-shard-00-02-lhkd1.mongodb.net:27017/library?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true',
    

     secretOrKey:'Secret'
 }
 module.exports={DBconfig} */

 const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/ATL',(err)=>{
    if(!err)
    console.log('connection successful');
    else
    console.log('Error in db:'+JSON.stringify(err,undefined,2));
});

module.exports=mongoose;

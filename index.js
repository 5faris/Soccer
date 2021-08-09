const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const Soccer = require('./Models/Soccer');

const app = express();

//parse a request body
app.use(express.json());

app.get('/soccer',(req,res)=>{
    Soccer.find()
      .then((result)=>{
           res.send(result)
      })
      .catch((error)=>{
          res.send(error.message)
      })
})

app.get('/soccer/:id',(req,res)=>{

})

app.post('/soccer',(req,res)=>{
    const soccer = new Soccer(req.body);
    soccer.save()
      .then((result)=>{
          res.send(result)
      })
      .catch((error)=>{
          res.send(error.message)
      })
})




const URL = process.env.DB_URL;
mongoose.connect(URL,{ useNewUrlParser: true, useUnifiedTopology: true })
     .then(()=>{
         console.log('Database Connection Established...');
       
     })
     .catch(()=>{
         console.log('Database connection Failed...')
     })

     
app.listen(8080,()=>{
console.log('Server is listening on port 8080....')
})


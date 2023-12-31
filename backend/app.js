const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const mongo=require('./mongoDB/db')
const userRoutes=require('./routes/user');
const sauceRoutes=require('./routes/sauce.js');
const path=require('path');
const config=('./middleware/multer-config')

 const app=express();

 app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
 
  app.use(express.json());
 app.use('/images', express.static(path.join(__dirname,'images')));
app.use('/api/auth',userRoutes);
app.use('/api/sauces',sauceRoutes)


module.exports=app;
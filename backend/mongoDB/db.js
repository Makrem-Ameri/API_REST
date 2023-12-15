const mongoose=require('mongoose');
const dotenv = require("dotenv").config();

mongoose.connect(process.env.DB_URI,
 { useNewUrlParser: true,
   useUnifiedTopology: true })
 .then(() => console.log('Connexion à MongoDB réussie !'))
 .catch(() => console.log('Connexion à MongoDB échouée !'));
 
 "mongodb+srv://<username>:<password>@cluster0.o0vsm7x.mongodb.net/?retryWrites=true&w=majority"
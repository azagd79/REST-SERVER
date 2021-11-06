const express = require('express');
const dotenv = require('dotenv').config({path: './env/.env'})
const hbs = require('hbs');
const cors = require('cors');

  
class Server{


    constructor(){
        this.app = express();
        this.middleware();
        this.routes();
    }
    
     port(){
    this.app.listen(process.env.PORT,()=>{
        console.log(`server in port ${process.env.PORT}`);
    })
     }
     middleware(){

           
           this.app.use(cors());
        ////ESTABLECER NUESTRA CARRPETA PUBLICA 
          this.app.use(express.static('public'))
        //    this.app.set('view engine','hbs');
        //    this.app.use('/resources',express.static('public'))
        //    this.app.use('/resources',express.static(__dirname + '/public'))
     }
     routes(){
        this.app.use('/api',require('../routes/users'));
   
    }

}

module.exports = Server;
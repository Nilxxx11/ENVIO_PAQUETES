const express = require('express');
const app = express();
const port = process.env.PORT || 3000
const path = require('path');
//Motor de plantillas_____________
app.set('view engine', 'ejs');//##
app.set('views',path.join(__dirname,'../FRONTEND/views'));
//________________________________

//Rutas__________________________
app.get('/',(req,res)=>{
  res.render('index', {namePage:'INICIO'});
});
app.get('/login',(req,res)=>{
  res.render('login',{namePage:'LOGIN'});
});
//________________________________

app.listen(port, (req, res)=> {
  console.log(`server en el puerto ${port}`);
});

// Export the Express API
module.exports = app;

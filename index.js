const express = require("express");
const appConfig = require('./config/appConfig');

const fs= require('fs');
const mongoose = require ('mongoose');
const bodyParser = require('body-parser');
const globalErrorMiddleware = require ('./middlewares/example')


const app = express();
//middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(globalErrorMiddleware._errorHandler);
/*const port = 3000;*/

    /*app.get("/hello", (req, res) => res.send("Hello World!"));*/

  
//bootstrap models
let modelsPath = './models'
fs.readdirSync(modelsPath).forEach(function (file) {
  if (~file.indexOf('.js')) {
    require(modelsPath + '/' + file)
  }
})



//bootstrap route
let routesPath = './routes'
fs.readdirSync(routesPath).forEach(function (file){
if(~file.indexOf('.js')){
  console.log("including the following file");
  console.log(routesPath + '/' + file);
  let route = require(routesPath + '/' + file);
  route.setRouter(app);
}

});
//end of bootstrap route



app.use(globalErrorMiddleware._notFoundHandler);



//listening the server - local server

app.listen(appConfig.port, () =>{
  console.log(`Example app listening on port ${appConfig.port}!`);

  //creating the mongodb connection here
  let db = mongoose.connect(appConfig.db.uri, {useNewUrlParser:true});
})

//handling mongoose connection error

mongoose.connection.on('error',function(err){
  console.log('database connection error');
  console.log(err)
}); //end mongoose connection error

//handling mongoose success event
mongoose.connection.on('open',function(err){
  if(err){
    console.log("database error");
    console.log(err);
  }
  else{
    console.log("database connection open success");
  }
});// end mongoose connection open handler
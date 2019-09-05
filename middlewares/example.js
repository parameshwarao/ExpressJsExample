//example middleware function

let examlemiddleware = (req,res,next) => {
    req.user = {};
    next();

}

let errorHandler = (err,req,res,next) =>{
console.log("application error handler called:");
console.log(err);
res.send("some error occured at global level")
}

let notFoundHandler = (req,res,next)=>{
console.log("global not found handler called");
res.status(404).send("route not found in the application");
}


module.exports = {
  _examlemiddleware : examlemiddleware,
  _errorHandler : errorHandler,
    _notFoundHandler: notFoundHandler
};
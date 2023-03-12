const jwt = require('jsonwebtoken');


   // This method was Adapted from Youtube
   //https://www.youtube.com/watch?v=mbsmsi7l3r4
        // Web Dev Simplified
       // https://www.youtube.com/c/WebDevSimplified
module.exports=(req,res,next)=>
{
try{


const authHeader = req.headers['authorization'];
const token = authHeader && authHeader.split(" ")[1];
   

  const decoded= jwt.verify(token,"secret_this_should_be_longer_than_it_is")
   req.user = decoded;

next();
}
catch(error)
{
res.status(401).json({
message:"Invalid token"

});}
};

// const jwt = require("jsonwebtoken");

// const config = process.env;

// const verifyToken = (req, res, next) => {
    
//   const token = req.body.token || req.query.token || req.headers["x-access-token"];

//   if (!token) {
//     return res.status(403).send("A token is required for authentication");
//   }
//   try {
//     const decoded = jwt.verify(token, config.TOKEN_KEY);
//     req.user = decoded;
//   } catch (err) {
//     return res.status(401).send("Invalid Token");
//   }
//   return next();
// };

// module.exports = verifyToken;







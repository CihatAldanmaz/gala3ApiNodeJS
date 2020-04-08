const jwt = require("jsonwebtoken")
const {isTokenIncluded, getAccessTokenFromHeader} = require("../../helpers/tokenHelper")


const getAccessToRoute = (req,res,next) => {

    const {JWT_SECRET_KEY} = process.env;

    if(!isTokenIncluded){
        console.log("token not included")
    }

 const access_token = getAccessTokenFromHeader(req);

 jwt.verify(access_token,JWT_SECRET_KEY, (err,decoded) => {
     if(err){
         console.log("you are not authorized: ",err)
     }else{

        req.user = {
            id: decoded.id,
            username: decoded.username
        }
        next();
     }
     
     
     
 })
 


}

module.exports = {
    getAccessToRoute
}
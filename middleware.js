const authMiddleware = (req,res,next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split("")[1];
    if(token !== null|| undefined) {
          next();
    }
  
}

module.exports = authMiddleware
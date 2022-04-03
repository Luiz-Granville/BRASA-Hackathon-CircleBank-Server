const jwt = require("jsonwebtoken");

module.exports = (req,res,next) =>{
  try{
    const authHeader = req.headers["authorization"];
    const authType = authHeader && authHeader.split(" ")[0];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token || authType != "Bearer" ) {
      return res.status(500).send({error:"Invalid authorization!"});
    }

    const verified = jwt.verify(token,process.env.TOKEN_SECRET);
    req.user = verified;
    req.userId = req.user.id;
    req.token = token;
    next();
  } catch(e) {
    return res.status(401).send({error:"Invalid token!"})
  }
}
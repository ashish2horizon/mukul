  const   express = require('express'), 
bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const AdminRouter = express.Router();

AdminRouter.post('/adminLogin', function(req,res,next){

  console.log(req.body.email);
  if(req.body.email==="admin" && req.body.password==="admin"){
    let token = jwt.sign({name:"admin" , password:"admin"},'secretAdmin', {expiresIn : "365d"});
    return res.status(200).json(token);
  }
})


AdminRouter.get('/verify',verifyToken,function(req,res,next){
  if(decodedToken.name==="Mukul" && decodedToken.password==="Mukul001"){
    res.status(200);
  }
})
var decodedToken='';


function verifyToken(req,res,next){
    let token = req.query.token;

    jwt.verify(token,'secretAdmin', function(err, tokendata){
       if(err){
            return res.status(400).json({message:' Unauthorized request'});
        }
       if(tokendata){
            decodedToken = tokendata;
            next();
      }
  })
}

module.exports = AdminRouter;

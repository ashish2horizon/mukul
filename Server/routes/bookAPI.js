const   express = require('express'), 
        bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
       
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const BookRouter = express.Router();

const Book = require('../schema/BooksSchema');

BookRouter.get('/bookslist', verifyToken ,function (req, res) {
    Book.find(function (err, post) {
        
        if (err)
            res.status(400).json(err)
        else 
            res.status(200).json(post);  
    });
});

BookRouter.get('/bookslistUser', verifyTokenT ,function (req, res) {
    Book.find(function (err, post) {
        if (err)
            res.status(400).json(err)
        else 
            res.status(200).json(post);  
    });
});
BookRouter.post('/addbook', verifyToken, function(req,res,next){
      let book = new Book({
        id            :   req.body.book.id,
        title         :   req.body.book.title,
        description   :   req.body.book.description,     
        image         :   req.body.book.image,
        author        :   req.body.book.author,
        category      :   req.body.book.category,
        avgRating     :   req.body.book.rating,
        totalReters   :   req.body.book.rater,
        pageCount     :   req.body.book.page ,
        quantity      :   req.body.book.quantity,
    })

    
    let promise = Book.findOne({id:req.body.book.id}).exec();
  
    promise.then(function(result){
      if(result) {
        Book.update({id:book.id} , {$set:{quantity:book.quantity}})
        return res.status(201).json("Already Present , Quantity Updated");
      }
  
      else {
          let promise = book.save();
          promise.then(function(doc){
            return res.status(200).json(doc);
        })
        promise.catch(function(err){
          return res.status(501).json({message: 'Error registering user.'})
        })
      }
    });  
  }) 


  BookRouter.post('/delete', verifyToken, function(req,res,next){
   
     Book.remove({id : req.body.id} , function(err, obj) {
        if (err) return res.status(401);
        return res.status(200).json(obj);  
      })
  })


function verifyToken(req,res,next){
        let token = req.body.token;
        if(token==undefined)
            token=req.query.token
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

  function verifyTokenT(req,res,next){
    let token = req.body.token;
    if(token==undefined)
        token=req.query.token
    jwt.verify(token,'secret', function(err, tokendata){
        if(err){
              
                return res.status(400).json({message:' Unauthorized request'});
        }
        if(tokendata){
                decodedToken = tokendata;
              
                next();
        }
  })
}
module.exports = BookRouter;
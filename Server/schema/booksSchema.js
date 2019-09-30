
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var book = new Schema({
  id:               {type: String },
  title:            {type: String } ,
  description:      {type: String },
  author :          {type: String },
  image :           {type: String },
  category:         {type: String },
  quantity:         {type: Number },
  pageCount :       {type: Number },
  avgRating:        {type: Number },
  totalReters :     {type: Number }
});


module.exports = mongoose.model('book', book);
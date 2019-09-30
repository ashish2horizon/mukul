const express = require('express'),
      path = require('path'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      mongoose = require('mongoose'),
      config = require('./config/DB');

const app = express();
const UserSchema = require('./routes/userAPI');
const BooksSchema = require('./routes/bookAPI');
const CartsSchema = require('./routes/cartAPI');
const AdminSchema = require('./routes/AdminAPI');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/ATL').then(
  () => { console.log('Database is connected') },
  err => { console.log('Can not connect to the database' + err) }
  );

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cors());
const Port = process.env.PORT || 5000;

app.use('/users', UserSchema);
app.use('/books', BooksSchema);
app.use('/carts', CartsSchema);
app.use('/admin', AdminSchema)
const server = app.listen(Port, function () {
  console.log('Listening on port ' + Port);
});

module.exports = server
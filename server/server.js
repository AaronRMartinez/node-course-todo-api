var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var{User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

// "forward slash URLs typically used for resources"
app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.listen(3000, () => {
  console.log('Started on port 3000');
});





//Example of variable and methods to print
//---------------------------------------------
// var newTodo = new Todo({
//   text: "Cook dinner"
// });
// --------------------------------------------
// anotherTodo.save().then(() => {
//   console.log('Saved anotherTodo', doc);
// }, (e) => {
//   console.log('Unable to save anotherTodo')
// });
// --------------------------------------------
// Another way to print any Todos,
// anotherTodo.save().then(() => {
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//   console.log('Unable to save', e);
// });

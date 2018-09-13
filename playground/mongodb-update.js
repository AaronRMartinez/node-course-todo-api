const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

// db.collection('Todos').findOneAndUpdate({
//   _id: new ObjectID("5b993246c3017625d9bde311")
// }, {
//   $set: {
//     completed: true
//   }
// }, {
//   returnOriginal: false
// }).then((result) => {
//   console.log(result);
// });

// db.collection('Users').findOneAndUpdate({
//   _id: new ObjectID("5b92ec38a7d2a127707107ba")
// }, {
//   $set: {
//     name: "Andrew"
//   }
// }).then((result) => {
//   console.log(result);
// })

db.collection('Users').update({
  _id: new ObjectID("5b92ec38a7d2a127707107ba")
}, {
  $inc : {
    age: 5
  }
}).then((result) => {
  console.log(result);
})

  // db.close();
});

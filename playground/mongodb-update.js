/**
 * Created by alena on 18/11/18.
 */
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDD server');

    //findOneAndUpdate
    // db.collection('Todos').findOneAndUpdate({_id: new ObjectID('5bf5a4abaa5697f8c5b583a1')},{
    //     $set: {
    //         completed: false
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({_id: new ObjectID('5bf15111426a1746261bb156')}, {
        $set: {name: 'Helen'},
        $inc: {age: +1}
    },{
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });
    // db.close();
});
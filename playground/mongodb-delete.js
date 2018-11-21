/**
 * Created by alena on 18/11/18.
 */
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDD server');

    // deleteMany
    // db.collection('Todos').deleteMany({text : 'Something to do'}).then(
    //     (result) => {
    //         console.log(result);
    //     }
    // );

    // deleteOne
    // db.collection('Todos').deleteOne({text : 'walk a dog'}).then(
    //     (result) => {
    //         console.log(result);
    //     }
    // );

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed : false}).then(
    //     (result) => {
    //         console.log(result);
    //     }
    // );

    // db.collection('Users').deleteMany({name: 'Helen'}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Users').deleteOne({_id: new ObjectID('5bf168432f83bf43ffe1a2c5')}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndDelete({_id: new ObjectID('5bf5a1e3aa5697f8c5b582fc')}).then(
        (result) => {
            console.log(JSON.stringify(result, undefined, 2));
        }
    );

    // db.close();
});
/**
 * Created by alena on 25/12/18.
 */
const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
    id: 10
};

var token = jwt.sign(data, '123abc');

console.log(token);
var decoded = jwt.verify(token, '123abc');
console.log(decoded);
// var message = 'I am user number 3';
//
// var hash = SHA256(message).toString();//result is an object , we convert it to a string
//
// console.log('message**',message);
// console.log('hash**',hash);
//
// var data = {
//     id: 4
// };
//
// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };
//
// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(data)).toString();
//
// var rusultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
// if (rusultHash === token.hash) {
//     console.log('Data was not changed!');
// } else {
//     console.log('Do not trust!');
// }
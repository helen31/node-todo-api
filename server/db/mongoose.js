/**
 * Created by alena on 28/11/18.
 */

var mongoose = require('mongoose');
var config = require('../config/config');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

module.exports = {
    mongoose
};
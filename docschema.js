var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var Schema = mongoose.Schema;

var DocSchema = new Schema ({
    owner : String,
    docindex : Number,
    docid : Number,
    docname : String,
    ipfsImageHash : String,
    uploadTime : Number,
    status: String

})

var DocModel = mongoose.model('DocModel', DocSchema);

module.exports = DocModel;
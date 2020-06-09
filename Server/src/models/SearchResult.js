var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var searchResultSchema = new Schema({
    title: String,
    description: String,
    topics: [Number]
});

const Searchresult = mongoose.model('SearchResult', searchResultSchema);
module.exports = Searchresult;
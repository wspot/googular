var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var searchResultSchema = new Schema({
    title: String,
    description: String,
    topics: [Number],
    redirectionLink: String
});

const Searchresult = mongoose.model('SearchResult', searchResultSchema, 'SearchResult');
module.exports = Searchresult;
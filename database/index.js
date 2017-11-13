var mongoose = require('mongoose');
var mongoDB = 'mongodb://127.0.0.1:27017/pokemons';
mongoose.connect(mongoDB, {
  useMongoClient: true
})

var db = mongoose.connection;

var Schema = mongoose.Schema;

var Pokemons = new Schema({
  name: String,
  image: Object,
  type: String,
  stats: Object
});

var Pokemon = mongoose.model('Pokemon', Pokemons)


module.exports = Pokemon;
const request = require('request');

let getPokemonByName = (name, callback) => {
  var result = request.get({
    url: `http://pokeapi.co/api/v2/pokemons/${name}`
  }, function(err, response, body) {
    callback(err, body);
  })
}


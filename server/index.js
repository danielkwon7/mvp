const express = require('express');
let app = express();
let request = require('request');
let Pokemon = require('../database/index');
let bodyParser = require('body-parser');
// let getPokemonByName = require('../helpers/pokemon');
app.use(express.static(__dirname + '/../public'));
app.use(bodyParser());

app.get('/pokemons', function(req, res) {

   var result = [{name:'daniel', image: ['http://assets1.ignimgs.com/2017/09/07/ashs-pikachu-m20-us-and-um-1504769753853_1280w.jpg'], stats: {frontend: 30, backend: 20 , meow: 10}}]

   Pokemon.find(function(err, data) {
    result = result.concat(data);
    console.log('THIS IS THE RESULT ---------------', result);
    res.send(result);
    res.end();
   })
})
app.post('/pokemons', function(req, res) {
  var name = Object.keys(req.body)[0];
  getPokemonByName(name, function(err, body) {
    var body = JSON.parse(body);
    if (Array.isArray(body.forms)) {
      console.log('---------------------')
      var pokename = body.forms[0].name;
      console.log('------!_!_#_!(%)!#(%!)_(#%)_!#(%)_!(#%)(_')
      var imageAPI = body.forms[0].url;
      console.log(imageAPI);
      var type = body.types[0].type.name;
      console.log(type);
      var stats = {};
      body.stats.forEach(function(stat) {
        console.log(stat);
        if (stat.stat.name) {
           stats[stat.stat.name] = stat.base_stat;
        }
      })
      var pokeimage;
      getPokemonImage(imageAPI, function(err, result) {
        pokeimage = result;
        var pokemonobject = { name: pokename, image: pokeimage, type: type, stats: stats};
        var pokemon = new Pokemon(pokemonobject)
        pokemon.save(function(err) {
          if (err) throw err;
          res.send(pokemonobject)
          res.end()
        })
      })
    } else {
      res.send()
      res.end()
    }
  });
})


let port = 1128;

app.listen(port, function() {
  console.log(`listening to port ${port}`)
})


let getPokemonByName = (name, callback) => {
  var result = request.get({
    url: `http://pokeapi.co/api/v2/pokemon/${name}`
  }, function(err, response, body) {
    callback(err, body);
  })
}

let getPokemonImage = (url, callback) => {
  var result = request.get({
    url: url
  }, function(err, response, body) {
    if (err) throw err;
    var body = JSON.parse(body);
    console.log(body.sprites);
    var urls = Object.keys(body.sprites).map(function(key) {
      return body.sprites[key];
    })
    callback(err, urls)
  })
}



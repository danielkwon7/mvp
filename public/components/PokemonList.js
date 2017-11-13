"use strict";

var PokemonList = function PokemonList(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h5",
      null,
      "You currently have ",
      props.pokemons.length > 1 ? props.pokemons.length + " pokemons" : props.pokemons.length + " pokemon",
      "."
    ),
    console.log('NEW!!!!!', props.pokemons),
    props.pokemons.map(function (pokemon) {
      return React.createElement(Pokemon, { image: pokemon.image, name: pokemon.name, type: pokemon.type, stats: pokemon.stats, audio: props.audio });
    })
  );
};

var Pokemon = function Pokemon(props) {
  return React.createElement(
    "div",
    null,
    React.createElement("img", { onClick: function onClick() {
        props.audio(props.name);
      }, src: props.image[0] }),
    React.createElement(
      "h5",
      { className: props.name },
      props.name
    ),
    Object.keys(props.stats).map(function (stat) {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "span",
          null,
          stat
        ),
        " ",
        React.createElement("progress", { id: stat, value: props.stats[stat], max: "100" })
      );
    })
  );
};
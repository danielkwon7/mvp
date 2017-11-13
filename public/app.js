'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      pokemons: [],
      total: 0,
      componentDidMount: false,
      display: {
        PokemonList: true,
        Search: true,
        Show: false
      },
      pokemon: null
    };
    _this.search = _this.search.bind(_this);
    _this.changeDisplay = _this.changeDisplay.bind(_this);
    _this.addPokemon = _this.addPokemon.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var scope = this;
      $.ajax({
        type: 'GET',
        url: '/pokemons',
        success: function success(data) {
          scope.setState({ pokemons: data });
          scope.playAudio('pikachu');
        }
      });
      // setInterval(scope.moveAroundMew, 1000)
    }

    // moveAroundMew() {
    //   var top = $('body').height() * Math.random() * .8;
    //   var left = $('body').width() * Math.random() * .7;
    //   document.getElementById('mew').animate({top: top, left: left})
    // }

  }, {
    key: 'playAudio',
    value: function playAudio(name) {
      if (name === 'daniel' || name === 'robin' || name === 'squirtle' || name === 'charmander' || name === 'jolteon' || name === 'dexcharmander' || name === 'mew') {
        var audio = document.getElementById(name);
        audio.play();
      }
    }
  }, {
    key: 'erase',
    value: function erase(name) {
      if (name === 'robin') {
        alert('Nope');
        return;
      }

      var name = name;
      var next = this;
      $.ajax({
        type: 'POST',
        url: '/erase',
        data: name,
        success: function success(data) {
          console.log('NAME------', name);
          console.log(next);
          var filter = next.state.pokemons.filter(function (pokemon) {
            return pokemon.name !== name;
          });
          next.setState({ pokemons: filter });
          console.log('ERASE---------');
        }
      });
    }
  }, {
    key: 'search',
    value: function search(name) {
      var scope = this;
      $.ajax({
        type: 'POST',
        url: '/pokemons',
        data: name,
        success: function success(data) {
          console.log('ULTIMATE---------', data);
          scope.setState({ pokemons: scope.state.pokemons.concat(data) });
          console.log('Search name POST request sent');
        }
      }).then(function () {
        console.log('success');
      });
    }
  }, {
    key: 'changeDisplay',
    value: function changeDisplay(input) {
      var display = Object.assign({}, this.state.display);
      display.input = !this.display.input;
      this.setState({ display: display });
    }
  }, {
    key: 'addPokemon',
    value: function addPokemon(pokemon) {
      this.setState({ pokemons: this.pokemons.concat(pokemon) });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(Search, { search: this.search, add: this.addPokemon }),
        React.createElement(PokemonList, { erase: this.erase, pokemons: this.state.pokemons, audio: this.playAudio })
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
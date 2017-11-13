'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PokemonList = function PokemonList(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h5',
      null,
      'You currently have ',
      props.pokemons.length > 1 ? props.pokemons.length + ' pokemons' : props.pokemons.length + ' pokemon',
      '.'
    ),
    console.log('NEW!!!!!', props.pokemons),
    props.pokemons.map(function (pokemon) {
      return React.createElement(Pokemon, { erase: props.erase, imagelength: pokemon.image.length, image: pokemon.image, name: pokemon.name, type: pokemon.type, stats: pokemon.stats, audio: props.audio });
    })
  );
};

var Pokemon = function (_React$Component) {
  _inherits(Pokemon, _React$Component);

  function Pokemon(props) {
    _classCallCheck(this, Pokemon);

    var _this = _possibleConstructorReturn(this, (Pokemon.__proto__ || Object.getPrototypeOf(Pokemon)).call(this, props));

    _this.state = {
      hello: true,
      health: _this.props.stats.hp
    };
    _this.changeVisual = _this.changeVisual.bind(_this);
    return _this;
  }

  _createClass(Pokemon, [{
    key: 'changeVisual',
    value: function changeVisual() {
      this.setState({ hello: !this.state.hello });
    }

    // decreaseHP() {
    //   this.setState({})
    // }

  }, {
    key: 'render',
    value: function render() {
      var scope = this;
      var deletebutton = '';
      var helpdesk = '';
      var pokedex = '';
      var attachDex = function attachDex(name) {
        return 'dex' + name;
      };
      if (scope.props.name !== 'daniel' && scope.props.name !== 'robin' && scope.props.name !== 'charmander') {
        deletebutton = React.createElement(
          'button',
          { onClick: function onClick() {
              scope.props.erase(scope.props.name);
            } },
          'Erase'
        );
      } else if (scope.props.name === 'robin') {
        deletebutton = React.createElement(
          'button',
          { onClick: function onClick() {
              scope.props.erase(scope.props.name);
            } },
          'Erase'
        );
        helpdesk = React.createElement(
          'button',
          { onClick: function onClick() {
              scope.props.audio(scope.props.name);
            } },
          'Help Desk'
        );
      } else if (scope.props.name === 'charmander') {
        deletebutton = React.createElement(
          'button',
          { onClick: function onClick() {
              scope.props.erase(scope.props.name);
            } },
          'Erase'
        );
        pokedex = React.createElement(
          'button',
          { onClick: function onClick() {
              scope.props.audio(attachDex(scope.props.name));
            } },
          'Evaluate'
        );
      }
      return React.createElement(
        'div',
        null,
        React.createElement('img', { onClick: function onClick() {
            scope.props.audio(scope.props.name);scope.changeVisual();
          }, src: scope.props.image[Math.floor(Math.random() * scope.props.imagelength)] }),
        React.createElement(
          'h5',
          { id: 'name', className: scope.props.name },
          scope.props.name
        ),
        ' ',
        deletebutton,
        ' ',
        helpdesk,
        ' ',
        pokedex,
        Object.keys(scope.props.stats).map(function (stat) {
          return React.createElement(
            'div',
            null,
            React.createElement(
              'span',
              null,
              stat
            ),
            ' ',
            React.createElement('progress', { id: stat, value: scope.props.stats[stat], max: '100' })
          );
        })
      );
    }
  }]);

  return Pokemon;
}(React.Component);
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = function (_React$Component) {
  _inherits(Search, _React$Component);

  function Search(props) {
    _classCallCheck(this, Search);

    var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));

    _this.state = {
      name: ''
    };
    _this.onChange = _this.onChange.bind(_this);
    _this.pikachu = _this.pikachu.bind(_this);
    return _this;
  }

  _createClass(Search, [{
    key: "delay",
    value: function delay() {
      (function () {
        var timer = 0;
        return function (e, callback, ms) {
          clearTimeout(timer);
          timer = setTimeout(function (e) {
            callback(e);
          }, ms);
        };
      })();
    }
  }, {
    key: "onChange",
    value: function onChange(e) {
      e.preventDefault();
      this.setState({
        name: e.target.value
      });
    }
  }, {
    key: "pikachu",
    value: function pikachu(e) {
      e.preventDefault();
      this.props.search(this.state.name);
    }
  }, {
    key: "render",
    value: function render() {
      var scope = this;
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h4",
          null,
          "Pokedex"
        ),
        React.createElement(
          "form",
          { onSubmit: this.pikachu },
          "Enter a pokemon name: ",
          React.createElement("input", { value: this.state.name, onChange: this.onChange }),
          React.createElement(
            "button",
            { type: "submit" },
            "Search Pokemon"
          )
        )
      );
    }
  }]);

  return Search;
}(React.Component);
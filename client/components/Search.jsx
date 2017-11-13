class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     name: ''
    };
    this.onChange = this.onChange.bind(this);
    this.pikachu = this.pikachu.bind(this);
  }

  delay() {
    (function(){
      var timer = 0;
      return function(e, callback, ms) {
        clearTimeout (timer);
        timer = setTimeout(function(e) {callback(e)}, ms);
      }
    })();
  }

  onChange(e) {
    e.preventDefault();
    this.setState({
      name: e.target.value
    })
  };

  pikachu(e) {
    e.preventDefault();
    this.props.search(this.state.name);
  }

  render() {
    var scope = this;
    return (
      <div>
        <br></br>
        <form onSubmit={this.pikachu}>
          Enter a pokemon name: <input value={this.state.name} onChange={this.onChange}/>
          <button type="submit">Search Pokemon</button>
        </form>
      </div>
    )
  }
}


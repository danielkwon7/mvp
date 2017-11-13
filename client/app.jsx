class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
      total: 0,
      componentDidMount: false,
      display: {
        PokemonList: true,
        Search: true,
        Show: false
      },
      pokemon: null
    }
    this.search = this.search.bind(this);
    this.changeDisplay = this.changeDisplay.bind(this);
    this.addPokemon = this.addPokemon.bind(this);
  }

  componentDidMount() {
    var scope = this;
    $.ajax({
      type: 'GET',
      url: '/pokemons',
      success: function(data) {
        scope.setState({ pokemons: data });
        scope.playAudio('pikachu');
      }
    })
  }

  playAudio(name) {
    var audio = document.getElementById(name);
    audio.play();
  }

  search(name) {
    var scope = this;
    $.ajax({
      type: 'POST',
      url: '/pokemons',
      data: name,
      success: function(data) {
        console.log('ULTIMATE---------', data);
        scope.setState({pokemons: scope.state.pokemons.concat(data)});
        console.log('Search name POST request sent');
      }
    })
    .then(function() {
      console.log('success');
    })
  }

  changeDisplay(input) {
    let display = Object.assign({}, this.state.display);
    display.input = !this.display.input;
    this.setState({ display: display})
  }

  addPokemon(pokemon) {
    this.setState({ pokemons: this.pokemons.concat(pokemon)})
  }

  render() {
    return (
      <div>
        <Search search={this.search} add={this.addPokemon}/>
        <PokemonList pokemons={this.state.pokemons} audio={this.playAudio}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))



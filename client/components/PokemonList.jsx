const PokemonList = (props) => (
  <div>
    <h5>You currently have {props.pokemons.length > 1 ? `${props.pokemons.length} pokemons` : `${props.pokemons.length} pokemon`}.</h5>
    {console.log('NEW!!!!!', props.pokemons)}
    {props.pokemons.map(pokemon => (
      <Pokemon erase={props.erase} imagelength={pokemon.image.length} image={pokemon.image} name={pokemon.name} type={pokemon.type} stats={pokemon.stats} audio={props.audio}/>
    ))}
  </div>
)

class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: true
    }
    this.changeVisual = this.changeVisual.bind(this);
  }

  changeVisual() {
    this.setState({hello: !this.state.hello})
  }

  render() {
    var scope = this;
    var deletebutton;
    if (scope.props.name !== 'daniel' && scope.props.name !== 'robin') {
      deletebutton = <button onClick={function(){scope.props.erase(scope.props.name)}}>Erase</button>
    } else {
      deletebutton = ''
    }
    return (
      <div>
        <img onClick={function(){scope.props.audio(scope.props.name); scope.changeVisual();}} src={scope.props.image[Math.floor(Math.random() * scope.props.imagelength)]}/>
          <h5 className={scope.props.name}>{scope.props.name}</h5> {deletebutton}

        {Object.keys(scope.props.stats).map(stat => (
          <div><span>{stat}</span> <progress  id={stat} value={scope.props.stats[stat]} max="100"></progress></div>
        ))}
      </div>
    )
  }
}



const PokemonList = (props) => (
  <div>
    <h5>You currently have {props.pokemons.length > 1 ? `${props.pokemons.length} pokemons` : `${props.pokemons.length} pokemon`}.</h5>
    {console.log('NEW!!!!!', props.pokemons)}
    {props.pokemons.map(pokemon => (
      <Pokemon erase={props.erase} imagelength={pokemon.image.length} image={pokemon.image} name={pokemon.name} type={pokemon.type} stats={pokemon.stats} audio={props.audio}/>
    ))}
    <img id="mew" onClick={props.mew} src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png"/>
  </div>
)

class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: true,
      health: this.props.stats.hp
    }
    this.changeVisual = this.changeVisual.bind(this);
  }

  changeVisual() {
    this.setState({hello: !this.state.hello, health: this.state.health - 10});
  }

  // decreaseHP() {
  //   this.setState({})
  // }

  render() {
    var scope = this;
    var deletebutton = '';
    var helpdesk = '';
    var pokedex = '';
    var attachDex = (name) => ('dex' + name);
    if (scope.props.name !== 'daniel' && scope.props.name !== 'robin' && scope.props.name !== 'charmander' && scope.props.name !== 'squirtle') {
      deletebutton = <button onClick={function(){scope.props.erase(scope.props.name)}}>Erase</button>
    } else if (scope.props.name === 'robin') {
      deletebutton = <button onClick={function(){scope.props.erase(scope.props.name)}}>Erase</button>;
      helpdesk = <button onClick={function() {scope.props.audio(scope.props.name)}}>Help Desk</button>;
    } else if (scope.props.name === 'charmander' || scope.props.name === 'squirtle') {
      deletebutton = <button onClick={function(){scope.props.erase(scope.props.name)}}>Erase</button>;
      pokedex = <button onClick={function() {scope.props.audio(attachDex(scope.props.name))}}>Evaluate</button>;
    }
    return (
      <div>
        <img onClick={function(){scope.props.audio(scope.props.name); scope.changeVisual();}} src={scope.props.image[Math.floor(Math.random() * scope.props.imagelength)]}/>
          <h5 id='name' className={scope.props.name}>{scope.props.name}</h5> {deletebutton} {helpdesk} {pokedex}

        {Object.keys(scope.props.stats).map(stat => (
          <div><span>{stat}</span> <progress  id={stat} value={scope.props.stats[stat]} max="100"></progress></div>
        ))}

      </div>
    )
  }
}



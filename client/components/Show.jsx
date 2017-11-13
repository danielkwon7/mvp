class Show extends React.Components {
  constructor(props) {
    super(props);
    this.state = {
      iactuallydonotneedastateforthiscomponent: true;
    }
  }

  render() {
    return(
      <div id='show'>
        {this.pokemons.map(function(pokemon) {
          return <img src={pokemon.images[0]} />
        })}
      </div>
    )
  }
}
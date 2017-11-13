const PokemonList = (props) => (
  <div>
    <h5>You currently have {props.pokemons.length > 1 ? `${props.pokemons.length} pokemons` : `${props.pokemons.length} pokemon`}.</h5>
    {console.log('NEW!!!!!', props.pokemons)}
    {props.pokemons.map(pokemon => (
      <Pokemon image={pokemon.image} name={pokemon.name} type={pokemon.type} stats={pokemon.stats} audio={props.audio}/>
    ))}
  </div>
)

const Pokemon = (props) => (
  <div>
    <img onClick={function(){props.audio(props.name)}} src={props.image[0]}/><h5 className={props.name}>{props.name}</h5>
    {Object.keys(props.stats).map(stat => (
      <div><span>{stat}</span> <progress  id={stat} value={props.stats[stat]} max="100"></progress></div>
    ))}
  </div>
)




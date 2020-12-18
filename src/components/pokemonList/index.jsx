import Pokemon from "../pokemonCharacter";

const PokemonList = ({ list }) => {
  return (
    <>
      {list.map(({ name, url }, idx) => (
        <Pokemon key={idx} name={name} url={url} />
      ))}
    </>
  );
};

export default PokemonList;

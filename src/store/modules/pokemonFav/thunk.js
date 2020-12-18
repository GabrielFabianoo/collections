import { pokemonFavAdd, pokemonFavRemove } from "./actions";

export const pokemonfavAddThunk = (name) => (dispatch, getState) => {
  const { allPokemons, pokemonFav } = getState();
  const findPokemon = allPokemons.find((pokemon) => pokemon.name === name);
  dispatch(pokemonFavAdd([...pokemonFav, findPokemon]));
};

export const pokemonfavRemoveThunk = (name) => (dispatch, getState) => {
  const { pokemonFav } = getState();
  const filter = pokemonFav.filter((pokemon) => pokemon.name !== name);
  localStorage.setItem("pokemonFav", JSON.stringify(filter));
  dispatch(pokemonFavRemove(filter));
};

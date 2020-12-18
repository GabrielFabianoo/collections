import { POKEMON_FAV_ADD, POKEMON_FAV_REMOVE } from "./actionsType";

export const pokemonFavAdd = (pokemon) => ({
  type: POKEMON_FAV_ADD,
  pokemon,
});

export const pokemonFavRemove = (pokemonList) => ({
  type: POKEMON_FAV_REMOVE,
  pokemonList,
});

import { ALL_POKEMONS } from "./actionType";

export const allPokemons = (pokemons) => ({
  type: ALL_POKEMONS,
  pokemons,
});

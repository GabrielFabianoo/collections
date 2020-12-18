import { ALL_POKEMONS } from "./actionType";

const allPokemonsReducer = (state = [], action) => {
  switch (action.type) {
    case ALL_POKEMONS:
      const { pokemons } = action;

      return pokemons;

    default:
      return state;
  }
};

export default allPokemonsReducer;

import { POKEMON_FAV_ADD, POKEMON_FAV_REMOVE } from "./actionsType";

const initialState = () => {
  const initialFav = localStorage.getItem("pokemonFav");
  if (initialFav) {
    return JSON.parse(initialFav);
  } else {
    return [];
  }
};

const pokemonFavReducer = (state = initialState(), action) => {
  switch (action.type) {
    case POKEMON_FAV_ADD:
      const { pokemon } = action;
      return pokemon;
    case POKEMON_FAV_REMOVE:
      const { pokemonList } = action;
      return pokemonList;
    default:
      return state;
  }
};

export default pokemonFavReducer;

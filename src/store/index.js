import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import allCharactersRickReducer from "./modules/allCharactersRick/reducer";
import rickAndMortyFavReducer from "./modules/rickAndMortyFav/reducer";
import allPokemonsReducer from "./modules/allPokemons/reducer";
import pokemonFavReducer from "./modules/pokemonFav/reducer";

const reducers = combineReducers({
  allCharacters: allCharactersRickReducer,
  rickAndMortyFav: rickAndMortyFavReducer,
  allPokemons: allPokemonsReducer,
  pokemonFav: pokemonFavReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;

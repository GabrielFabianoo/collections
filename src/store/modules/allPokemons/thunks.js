import axios from "axios";
import { allPokemons } from "./actions";

export const allPokemonsThunk = () => (dispatch, getState) => {
  axios.get(`https://pokeapi.co/api/v2/pokemon?&limit=160`).then((res) => {
    dispatch(allPokemons(res.data.results));
  });
};

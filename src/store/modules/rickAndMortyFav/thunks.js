import { rickAndMortyAdd, rickAndMortyRemove } from "./actions";

export const rickAndMortyAddThunk = (id) => (dispatch, getState) => {
  const { rickAndMortyFav, allCharacters } = getState();
  const favCharacter = allCharacters.find((character) => character.id === id);
  dispatch(rickAndMortyAdd([...rickAndMortyFav, favCharacter]));
};

export const rickAndMortyRemoveThunk = (id) => (dispatch, getState) => {
  const { rickAndMortyFav } = getState();
  const filter = rickAndMortyFav.filter(
    (rickAndMorty) => rickAndMorty.id !== id
  );
  localStorage.setItem("rickAndMortyFav", JSON.stringify(filter));
  dispatch(rickAndMortyRemove(filter));
};

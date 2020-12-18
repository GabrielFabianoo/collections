import {
  RICK_AND_MORTY_FAV_ADD,
  RICK_AND_MORTY_FAV_REMOVE,
} from "./actionsType";

const initialState = () => {
  const initialFav = localStorage.getItem("rickAndMortyFav");
  if (initialFav) {
    return JSON.parse(initialFav);
  } else {
    return [];
  }
};

const rickAndMortyFavReducer = (state = initialState(), action) => {
  switch (action.type) {
    case RICK_AND_MORTY_FAV_ADD:
      const { character } = action;

      return character;
    case RICK_AND_MORTY_FAV_REMOVE:
      const { characterList } = action;

      return characterList;
    default:
      return state;
  }
};

export default rickAndMortyFavReducer;

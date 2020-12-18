import {
  RICK_AND_MORTY_FAV_ADD,
  RICK_AND_MORTY_FAV_REMOVE,
} from "./actionsType";

export const rickAndMortyAdd = (character) => ({
  type: RICK_AND_MORTY_FAV_ADD,
  character,
});

export const rickAndMortyRemove = (characterList) => ({
  type: RICK_AND_MORTY_FAV_REMOVE,
  characterList,
});

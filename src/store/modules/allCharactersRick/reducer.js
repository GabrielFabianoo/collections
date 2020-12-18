import { ALL_CHARACTERS_RICK } from "./actionType";

const allCharactersRickReducer = (state = [], action) => {
  switch (action.type) {
    case ALL_CHARACTERS_RICK:
      const { characters } = action;
      return characters;

    default:
      return state;
  }
};

export default allCharactersRickReducer;

import axios from "axios";

import { allCharactersRick } from "./actions";

export const allCharactersRickThunk = (nextUrl, setNextUrl) => (
  dispatch,
  getState
) => {
  const { allCharacters } = getState();

  axios.get(nextUrl).then((res) => {
    setNextUrl(res.data.info.next);
    dispatch(allCharactersRick([...allCharacters, ...res.data.results]));
  });
};

import { Route, Switch } from "react-router-dom";
import RickAndMorty from "../../pages/rickAndMorty";
import RickAndMortyFav from "../../pages/rickAndMortyFav";
import Pokemon from "../../pages/pokemon";
import PokemonFav from "../../pages/pokemonFav";
import Chart from "../../pages/Chart";
import Home from "../../pages/Home";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/graficos">
          <Chart />
        </Route>
        <Route path="/pokemon/favorites">
          <PokemonFav />
        </Route>
        <Route path="/pokemon">
          <Pokemon />
        </Route>
        <Route path="/rickAndMorty/favorites">
          <RickAndMortyFav />
        </Route>
        <Route path="/rickAndMorty">
          <RickAndMorty />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;

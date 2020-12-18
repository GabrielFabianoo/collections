import { Link } from "react-router-dom";
import PokemonList from "../../components/pokemonList";
import { motion } from "framer-motion";

import { NavigationPoke } from "../../components/styledComponents/navigation/styled";
import {
  ContainerPokeFav,
  NotFound,
} from "../../components/styledComponents/container/styled";

import { useSelector } from "react-redux";

const PokemonFav = () => {
  const fav = useSelector((state) => state.pokemonFav);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <NavigationPoke>
        <div>
          <Link to="/rickAndMorty">
            <img
              src="https://img.icons8.com/color/48/000000/rick-sanchez.png"
              alt="Rick"
            />
            <img
              src="https://img.icons8.com/color/48/000000/morty-smith.png"
              alt="Morty"
            />
            Universo Rick
          </Link>
        </div>
        <div>
          <Link to="/graficos">
            <img
              src="https://img.icons8.com/cotton/64/000000/cherry-donut.png"
              alt="Grafico"
            />
            Gráfico
          </Link>
        </div>
        <div>
          <Link to="/pokemon">
            <img
              src="https://img.icons8.com/color/48/000000/map-pokemon.png"
              alt="Pokemons"
            />
            Capture pokemons
          </Link>
        </div>
      </NavigationPoke>
      <ContainerPokeFav>
        {fav.length !== 0 ? (
          <PokemonList list={fav} />
        ) : (
          <NotFound>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
            >
              Você ainda não escolheu seus pokemons favoritos
            </motion.div>
          </NotFound>
        )}
      </ContainerPokeFav>
    </motion.div>
  );
};

export default PokemonFav;

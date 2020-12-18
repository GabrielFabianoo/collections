import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import RickAndMortyList from "../../components/rickAndMortyList";
import { NavigationRick } from "../../components/styledComponents/navigation/styled";
import {
  ContainerRickFav,
  NotFound,
} from "../../components/styledComponents/container/styled";
import { useSelector } from "react-redux";

const RickAndMortyFav = () => {
  const fav = useSelector((state) => state.rickAndMortyFav);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <NavigationRick>
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
              alt="Pokemon"
            />
            Pokemon
          </Link>
        </div>
      </NavigationRick>
      <ContainerRickFav>
        {fav.length !== 0 ? (
          <RickAndMortyList list={fav} />
        ) : (
          <NotFound>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
            >
              Você ainda não escolheu seus personagens favoritos
            </motion.div>
          </NotFound>
        )}
      </ContainerRickFav>
    </motion.div>
  );
};

export default RickAndMortyFav;

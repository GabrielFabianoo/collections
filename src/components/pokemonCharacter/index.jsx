import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { CardPoke } from "../styledComponents/container/styled";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import {
  pokemonfavAddThunk,
  pokemonfavRemoveThunk,
} from "../../store/modules/pokemonFav/thunk";

const Pokemon = ({ name, url }) => {
  const [info, setInfo] = useState([]);
  const [isFav, setIsFav] = useState(false);

  const location = useLocation();
  const dispatch = useDispatch();

  const fav = useSelector((state) => state.pokemonFav);

  const addFav = () => {
    dispatch(pokemonfavAddThunk(name));
    const find = fav?.find((e) => name === e.name);
    if (find === undefined) {
      setIsFav(true);
    }
  };

  const removeFav = () => {
    dispatch(pokemonfavRemoveThunk(name));
    const find = fav?.find((e) => name === e.name);
    if (find !== undefined) {
      setIsFav(false);
    }
  };

  useEffect(() => {
    axios.get(url).then((res) => {
      setInfo(res.data);
    });
  }, [url]);

  useEffect(() => {
    localStorage.setItem("pokemonFav", JSON.stringify(fav));
    if (location.pathname === "/pokemon/favorites") {
      setIsFav(true);
    }
    if (location.pathname === "/pokemon") {
      const find = fav?.find((e) => name === e.name);
      if (find !== undefined) {
        setIsFav(true);
      } else {
        setIsFav(false);
      }
    }
  }, [name, fav, location.pathname]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        whileHover={{
          scale: 1.1,
          transition: { duration: 1 },
        }}
      >
        <CardPoke>
          <div>
            <div>Id: {info.id}</div>
            <div>Nome: {name}</div>
          </div>
          {info.sprites?.other["official-artwork"]["front_default"] ? (
            <img
              src={info.sprites?.other["official-artwork"]["front_default"]}
              alt="ImagemPokemon"
            />
          ) : (
            <div>Imagem não encontrada</div>
          )}
          <div>
            Habilidades:
            {info.abilities?.map(({ ability }, idx) => (
              <div key={idx}>
                {" "}
                {idx + 1}: {ability.name}
              </div>
            ))}
          </div>
          <div>
            <div>Altura: {info.height}</div>
            <div>Peso: {info.weight}Kg</div>
          </div>
          <div>
            Types:
            {info.types?.map(({ type }, idx) => (
              <div key={idx}>
                {idx + 1}: {type.name}{" "}
              </div>
            ))}
          </div>
          <div>
            {isFav ? (
              <button onClick={removeFav}>
                <motion.div
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 1 },
                  }}
                >
                  <img
                    src="https://img.icons8.com/plasticine/100/000000/open-pokeball.png"
                    alt="RemoveFavoritos"
                  />{" "}
                </motion.div>
              </button>
            ) : (
              <button onClick={addFav}>
                <motion.div
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 1 },
                  }}
                >
                  <img
                    src="https://img.icons8.com/carbon-copy/100/000000/open-pokeball.png"
                    alt="add Favoritos"
                  />{" "}
                </motion.div>
              </button>
            )}
          </div>
        </CardPoke>
      </motion.div>
    </>
  );
};

export default Pokemon;

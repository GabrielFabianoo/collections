import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { CardRick } from "../styledComponents/container/styled";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import {
  rickAndMortyAddThunk,
  rickAndMortyRemoveThunk,
} from "../../store/modules/rickAndMortyFav/thunks";

const RickAndMortyCharacter = ({
  id,
  name,
  image,
  status,
  species,
  type,
  gender,
  origin,
  location,
  created,
}) => {
  const [isFav, setIsFav] = useState(false);
  const useLoc = useLocation();

  const dispatch = useDispatch();
  const fav = useSelector((state) => state.rickAndMortyFav);

  const addFav = () => {
    dispatch(rickAndMortyAddThunk(id));
    const fav1 = fav?.find((e) => id === e.id);
    if (fav1 === undefined) {
      setIsFav(true);
    }
  };

  const removeFav = () => {
    const fav1 = fav?.find((e) => id === e.id);
    dispatch(rickAndMortyRemoveThunk(fav1.id));
    if (fav1 !== undefined) {
      setIsFav(false);
    }
  };

  useEffect(() => {
    localStorage.setItem("rickAndMortyFav", JSON.stringify(fav));
    if (useLoc.pathname === "/rickAndMorty/favorites") {
      setIsFav(true);
    }
    if (useLoc.pathname === "/") {
      const find = fav?.find((e) => id === e.id);
      if (find !== undefined) {
        setIsFav(true);
      } else {
        setIsFav(false);
      }
    }
  }, [name, fav, id, useLoc.pathname]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        whileHover={{
          scale: 1.1,
          transition: { duration: 1 },
        }}
      >
        <CardRick>
          <div>
            <div>Id: {id}</div>
            <div>Nome: {name}</div>
          </div>
          <img src={image} alt={name} />
          <div>
            <div>Satus: {status}</div>
            <div>Espécie: {species}</div>
          </div>
          {type !== "" && <div>Tipo: {type}</div>}
          <div>
            <div>Gênero: {gender}</div>
            <div>Origem: {origin}</div>
          </div>
          <div>
            <div>Ultima vez visto: {location}</div>
            <div>Criado em: {created}</div>
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
                    src="https://img.icons8.com/offices/80/000000/galaxy.png"
                    alt="Remove fav"
                  />
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
                    src="https://img.icons8.com/ios/40/000000/galaxy.png"
                    alt="Add fav"
                  />
                </motion.div>
              </button>
            )}
          </div>
        </CardRick>
      </motion.div>
    </>
  );
};

export default RickAndMortyCharacter;

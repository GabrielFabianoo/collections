import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import RickAndMortyList from "../../components/rickAndMortyList";
import PaginationRickAndMorty from "../../components/pagination/paginationRickAndMorty";
import {
  NavigationRick,
  SearchRick,
} from "../../components/styledComponents/navigation/styled";
import {
  ContainerRick,
  CardGroupRick,
  CardGroupFilterRick,
  NotFound,
} from "../../components/styledComponents/container/styled";
import { useSelector, useDispatch } from "react-redux";
import { allCharactersRickThunk } from "../../store/modules/allCharactersRick/thunks";

const RickAndMorty = () => {
  const characterList = useSelector((state) => state.allCharacters);
  const [nextUrl, setNextUrl] = useState(
    "https://rickandmortyapi.com/api/character"
  );
  const dispatch = useDispatch();

  const [listRickAndMorty, setListRickAndMorty] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [value, setValue] = useState("");
  const [page, setPage] = useState(1);
  const [pageNumbers, setPageNumbers] = useState([]);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((res) => {
        setInfo(res.data.info);
        setListRickAndMorty(res.data.results);
        const numbers = [];
        for (let i = 1; i <= res.data.info.pages; i++) {
          numbers.push(i);
        }
        setPageNumbers(numbers);
      });
  }, [page]);

  useEffect(() => {
    if (nextUrl === null) {
      return;
    }
    dispatch(allCharactersRickThunk(nextUrl, setNextUrl));
  }, [nextUrl, dispatch]);

  const showCharacter = (e) => {
    setValue(e.target.value);
    const searchCharacters = characterList.filter(
      (character) =>
        character.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !==
        -1
    );
    setFilteredCharacters(searchCharacters);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <NavigationRick>
        <div>
          <Link to="/rickAndMorty/favorites">
            <img
              src="https://img.icons8.com/office/40/000000/galaxy.png"
              alt="Portal"
            />
            Favoritoverso
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
            Capture pokemons
          </Link>
        </div>
      </NavigationRick>
      <SearchRick>
        <div>
          <input
            placeholder="Pesquise seu personagem favorito"
            onChange={showCharacter}
            value={value}
          />
        </div>

        {value === "" && (
          <div>
            <PaginationRickAndMorty
              page={page}
              setPage={setPage}
              info={info}
              pageNumbers={pageNumbers}
            />
          </div>
        )}
      </SearchRick>
      <ContainerRick>
        {value === "" ? (
          <>
            <CardGroupRick>
              <RickAndMortyList list={listRickAndMorty} page={page} />
            </CardGroupRick>
          </>
        ) : filteredCharacters.length !== 0 ? (
          <CardGroupFilterRick>
            <RickAndMortyList list={filteredCharacters} />
          </CardGroupFilterRick>
        ) : (
          <NotFound>Personagens não encontrado</NotFound>
        )}
      </ContainerRick>
    </motion.div>
  );
};

export default RickAndMorty;

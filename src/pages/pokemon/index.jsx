import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import PokemonList from "../../components/pokemonList";
import PaginationPokemon from "../../components/pagination/paginationPokemon";
import { NavigationPoke } from "../../components/styledComponents/navigation/styled";
import { SearchPoke } from "../../components/styledComponents/navigation/styled";
import {
  ContainerPoke,
  CardGroupPoke,
  CardGroupFilterPoke,
  NotFound,
} from "../../components/styledComponents/container/styled";
import { useDispatch, useSelector } from "react-redux";
import { allPokemonsThunk } from "../../store/modules/allPokemons/thunks";

const Pokemon = () => {
  const allPokemons = useSelector((state) => state.allPokemons);
  const dispatch = useDispatch();

  const [listPokemons, setListPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [value, setValue] = useState("");
  const [page, setPage] = useState(0);
  const [pageNumbers, setPageNumbers] = useState([]);

  const searchPokemon = (e) => {
    setValue(e.target.value);
    const searchPokemons = allPokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredPokemons(searchPokemons);
  };

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=20`)
      .then((res) => {
        setListPokemons(res.data.results);
        const numbers = [];
        for (let i = 0; i <= 7; i++) {
          numbers.push(i);
        }
        setPageNumbers(numbers);
      });
  }, [page]);

  useEffect(() => {
    dispatch(allPokemonsThunk());
  }, [dispatch]);

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
          <Link to="/pokemon/favorites">
            <img
              src="https://img.icons8.com/color/48/000000/pokedex.png"
              alt="FavoritosPokemon"
            />
            Pokédex
          </Link>
        </div>
      </NavigationPoke>

      <SearchPoke>
        <div>
          <input
            placeholder="Procure seu pokemon favorito"
            onChange={searchPokemon}
            value={value}
          />
        </div>
        {value === "" && (
          <div>
            <PaginationPokemon
              page={page}
              setPage={setPage}
              pageNumbers={pageNumbers}
            />
          </div>
        )}
      </SearchPoke>
      <ContainerPoke>
        {value === "" ? (
          <>
            <CardGroupPoke>
              <PokemonList list={listPokemons} />
            </CardGroupPoke>
          </>
        ) : filteredPokemons.length !== 0 ? (
          <CardGroupFilterPoke>
            <PokemonList list={filteredPokemons} />
          </CardGroupFilterPoke>
        ) : (
          <NotFound>Pokemon não encontrado</NotFound>
        )}
      </ContainerPoke>
    </motion.div>
  );
};

export default Pokemon;

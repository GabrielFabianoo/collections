import { Link } from "react-router-dom";
import { NavigationChart } from "../../components/styledComponents/navigation/styled";
import { motion } from "framer-motion";
import {
  ContainerChart,
  NotFound,
} from "../../components/styledComponents/container/styled";
import React from "react";

import { Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";

const Chart = () => {
  const rickFav = useSelector((state) => state.rickAndMortyFav);
  const pokeFav = useSelector((state) => state.pokemonFav);

  const data = {
    labels: ["Rick and Morty", "Pokemons"],
    datasets: [
      {
        data: [rickFav?.length, pokeFav?.length],
        backgroundColor: ["#05668D", "#00A393"],
        hoverBackgroundColor: ["#0686B1", "#3DC1A0"],
        color: "white",
      },
    ],
  };

  return (
    <>
      <NavigationChart>
        <div>
          <Link to="/rickAndMorty">
            Universo Rick
            <img
              src="https://img.icons8.com/color/48/000000/rick-sanchez.png"
              alt="Rick"
            />
            <img
              src="https://img.icons8.com/color/48/000000/morty-smith.png"
              alt="Morty"
            />
          </Link>
        </div>

        <div>
          <Link to="/pokemon">
            Capture pokemons
            <img
              src="https://img.icons8.com/color/48/000000/map-pokemon.png"
              alt="Pokemon"
            />
          </Link>
        </div>
      </NavigationChart>
      <ContainerChart>
        {pokeFav.length !== 0 || rickFav.length !== 0 ? (
          <>
            <h1>Personagens favoritos X Pokemons favoritos</h1>
            <div>
              <Doughnut data={data} width={100} height={100} />
            </div>
          </>
        ) : (
          <NotFound>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
            >
              Você ainda não escolheu nenhum personagem favorito
            </motion.div>
          </NotFound>
        )}
      </ContainerChart>
    </>
  );
};

export default Chart;

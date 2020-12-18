import {
  ContainerHome,
  HomeBox,
  NavHomeCard,
  HomeMain,
} from "../../components/styledComponents/container/styled";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <ContainerHome>
      <h1>
        Escolha um para começar
        <img
          src="https://img.icons8.com/clouds/100/000000/down.png"
          alt="arrow_down"
        />
      </h1>
      <HomeBox>
        <HomeMain>
          <div>
            <div className="nav">
              <Link to="/rickAndMorty">
                Rick and morty
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

            <div className="bkg">
              <Link to="/rickAndMorty">
                <img
                  alt="backgroundRick"
                  src="https://wallpaperboat.com/wp-content/uploads/2019/04/rick-and-morty-wallpaper-portal-wallpaper-007.jpg"
                />
              </Link>
            </div>
          </div>
          <div>
            <div className="nav">
              <Link to="/pokemon">
                Pokemon
                <img
                  src="https://img.icons8.com/color/48/000000/map-pokemon.png"
                  alt="Pokemon"
                />
              </Link>
            </div>
            <div className="bkg">
              <Link to="/pokemon">
                <img
                  alt="backgroundPokemon"
                  src="https://i.imgur.com/SB7RO5p.jpg"
                />
              </Link>
            </div>
          </div>
        </HomeMain>
      </HomeBox>
    </ContainerHome>
  );
};

export default Home;

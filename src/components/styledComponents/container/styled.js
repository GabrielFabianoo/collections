import styled from "styled-components";

export const NotFound = styled.div`
  width: 50% !important;
  height: 50% !important;
  color: #f0f3bd;
  font-weight: bold;
  font-size: 5em !important;
  padding-top: 50px;

  div {
    width: 100% !important;
    height: 100% !important;
    display: flex;
    align-items: center;
    text-align: center;
  }

  @media (max-width: 768px) {
    width: 80% !important;
    height: 80% !important;
    font-size: 4em !important;
  }

  @media (max-width: 425px) {
    font-size: 2em !important;
  }
`;

export const ContainerPoke = styled.div`
  box-sizing: border-box;
  background: #0686b1;
  min-height: 85vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  z-index: 1;
`;

export const ContainerRick = styled(ContainerPoke)`
  background: #00a393;
`;
export const ContainerHome = styled(ContainerPoke)`
  height: 100vh;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;

  background: hsla(174, 100%, 32%, 1);

  background: linear-gradient(
    90deg,
    hsla(174, 100%, 32%, 1) 0%,
    hsla(195, 93%, 36%, 1) 100%
  );

  background: -moz-linear-gradient(
    90deg,
    hsla(174, 100%, 32%, 1) 0%,
    hsla(195, 93%, 36%, 1) 100%
  );

  background: -webkit-linear-gradient(
    90deg,
    hsla(174, 100%, 32%, 1) 0%,
    hsla(195, 93%, 36%, 1) 100%
  );

  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#00A393", endColorstr="#0686B1", GradientType=1 );

  h1 {
    color: #f0f3bd;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 425px) {
      text-align: center;
      font-size: 1.5em;
    }

    img {
      width: 100px;
      height: 100px;

      @media (max-width: 540px) {
        width: 50px;
        height: 50px;
      }
    }
  }
`;

export const HomeBox = styled.div`
  width: 60%;
  height: 40%;
  box-sizing: border-box;
  border-radius: 10px;
  background: hsla(174, 100%, 32%, 1);

  background: linear-gradient(
    90deg,
    hsla(174, 100%, 32%, 1) 0%,
    hsla(197, 93%, 29%, 1) 100%
  );

  background: -moz-linear-gradient(
    90deg,
    hsla(174, 100%, 32%, 1) 0%,
    hsla(197, 93%, 29%, 1) 100%
  );

  background: -webkit-linear-gradient(
    90deg,
    hsla(174, 100%, 32%, 1) 0%,
    hsla(197, 93%, 29%, 1) 100%
  );

  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#00A393", endColorstr="#05668D", GradientType=1 );

  @media (max-width: 540px) {
    width: 80%;
    height: 60%;
  }
`;
export const HomeMain = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 10px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }

  div {
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 540px) {
      width: 100%;
    }

    .nav {
      width: 100%;
      height: 10%;

      a {
        width: 100%;
        text-decoration: none;
        font-size: 1.5em;
        font-weight: bold;
        color: black;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #f0f3bd;

        :hover {
          color: #cfda2f;
          transform: scale(1.1);
        }
        @media (max-width: 768px) {
          font-size: 1em;
        }

        @media (max-width: 425px) {
          text-align: center;
        }
      }
      img {
        width: 32px;
        height: 32px;

        :hover {
          filter: invert(30%);
          transform: scale(1.1);
        }

        @media (max-width: 768px) {
          width: 25px;
          height: 25px;
        }
      }
    }
  }

  .bkg {
    height: 90%;
    width: 85%;
    box-sizing: border-box;

    a {
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 95%;
        height: 95%;
        border-radius: 10px;

        :hover {
          filter: invert(30%);
          transform: scale(1.1);
        }
      }
    }
  }
`;

export const ContainerChart = styled(ContainerPoke)`
  height: 95vh;
  background: #071e22;
  z-index: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  h1 {
    color: white;
    margin: 10px;
  }

  div {
    width: 25%;
    height: 25%;
    position: relative;
  }
`;

export const ContainerPokeFav = styled.div`
  box-sizing: border-box;
  background: #0686b1;
  min-height: 100vh;
  width: 100%;
  display: flex;
  padding: 10vh 5vh 5vh 5vh;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  z-index: 1;
`;

export const ContainerRickFav = styled(ContainerPokeFav)`
  background: #79dbac;
`;

export const CardGroupFilterPoke = styled.div`
  box-sizing: border-box;
  background: #0686b1;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  z-index: 1;
`;

export const CardGroupFilterRick = styled(CardGroupFilterPoke)`
  background: #79dbac;
`;

export const CardGroupPoke = styled.div`
  box-sizing: border-box;
  background: #0686b1;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  z-index: 1;
  padding: 5%;

  @media (max-width: 768px) {
    padding: 0%;
  }
`;

export const CardGroupRick = styled(CardGroupPoke)`
  background: #79dbac;
`;

export const CardPoke = styled.div`
  box-sizing: border-box;
  box-shadow: 0 0 0.5em black;
  width: 100vw;
  max-width: 330px;
  font-size: 0.9em;
  height: 95vh;
  max-height: 500px;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #05668d;
  border: 2px solid #f0f3bd;
  border-radius: 10px;
  padding: 10px;
  z-index: 1;

  @media (max-width: 1024px) {
    max-width: 300px;
    max-height: 450px;
  }

  @media (max-width: 768px) {
    max-width: 250px;
    max-height: 400px;
  }

  @media (max-width: 425px) {
    max-width: 150px;
    max-height: 300px;
  }

  :hover {
    background: #06769f;
  }
  div {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    color: #f0f3bd;
    font-weight: bold;
    display: flex;
    justify-content: center;
    margin: 0 1px;
    align-items: center;
    padding: 3px;
    border: 1px solid #f0f3bd;
    border-radius: 10px 0 10px 0;
    margin: 1px;

    @media (max-width: 768px) {
      max-height: 50px;
      font-size: 0.8em;
    }
    @media (max-width: 425px) {
      font-size: 0.45em;
    }
  }

  img {
    box-sizing: border-box;
    width: 50%;
    height: 30%;

    @media (max-width: 425px) {
      width: 75px;
      height: 75px;
    }
  }

  button {
    width: 20%;
    height: 100%;
    background: none;
    outline: none;
    border: none;
    display: flex;
    justify-content: center;

    @media (max-width: 425px) {
      width: 100%;
    }

    img {
      box-sizing: border-box;
      width: 45px;
      height: 45px;
      border-radius: 50%;
      @media (max-width: 425px) {
        width: 32px;
        height: 32px;
      }

      :hover {
        background: whitesmoke;
      }
    }
  }
`;

export const CardRick = styled(CardPoke)`
  background: #00a393;
  border: 2px solid #f0f3bd;

  :hover {
    background: #3dc1a0;
  }
  div {
    border: 1px solid #f0f3bd;
    color: #f0f3bd;
  }

  button {
    img {
      :hover {
      }
    }
  }
`;

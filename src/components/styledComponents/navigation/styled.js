import styled from "styled-components";

export const NavigationPoke = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 5vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #0686b1;
  position: fixed;
  z-index: 2;
  div {
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #0686b1;
    border: 5px solid #06769f;
    border-top: none;
    :hover {
      background: #05668d;
      border: 5px solid #0686b1;
      border-top: none;
    }
    a {
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      color: #f0f3bd;
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;

      :hover {
        color: #7bbdb7;
      }
      :focus {
        background: white;
        color: #028090;
      }

      @media (max-width: 425px) {
        font-size: 0.8em;
      }

      img {
        width: 32px;
        height: 32px;

        @media (max-width: 425px) {
          width: 25px;
          height: 25px;
        }
      }
    }
  }
`;

export const NavigationRick = styled(NavigationPoke)`
  background: #3dc1a0;
  div {
    background: #00a393;
    border: 5px solid #3dc1a0;
    border-top: none;
    :hover {
      background: #79dbac;
      border: 5px solid #1fb29a;
      border-top: none;
    }
    a {
      color: #f0f3bd;

      :hover {
        color: #00a393;
      }
      :focus {
        background: white;
        color: #02c39a;
      }
    }
  }
`;

export const NavigationChart = styled(NavigationPoke)`
  position: static;
  background: #1d7874;
  div {
    background: #1d7874;
    border: 5px solid #679289;
    border-top: none;
    :hover {
      background: #071e22;
      border: 5px solid #1d7874;
      border-top: none;
    }
    a {
      color: #ffe066;

      :hover {
        color: #a15856;
      }
      :focus {
        background: white;
        color: #02c39a;
      }
    }
  }
`;

export const SearchPoke = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #05668d;
  padding-top: 5vh;
  div {
    box-sizing: border-box;
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    input {
      width: 30%;
      height: 50%;
      border-radius: 5px;
      box-shadow: 0 0 0.5em grey;

      border: none;
      outline-color: #0686b1;
      padding: 10px;
      margin: 0;
      :hover {
        background: #f0f3bd;
      }
      :focus {
        background: #0686b1;
        color: #7bbdb7;
      }

      @media (max-width: 425px) {
        width: 75%;
      }
    }
  }
`;

export const SearchRick = styled(SearchPoke)`
  background: #00a393;
  div {
    input {
      outline-color: #02c39a;
      :hover {
        background: #f0f3bd;
        color: #00a393;
      }
      :focus {
        background: #79dbac;
        color: #00a393;
      }
    }
  }
`;

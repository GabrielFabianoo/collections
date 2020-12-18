import styled from "styled-components";

export const PaginationPoke = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;

  div {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: flex;
    margin: 0;
    div {
      width: 10%;
      height: 100%;
      margin: 0;
      display: flex;
      button {
        box-sizing: border-box;
        width: 100%;
        height: 200%;
        outline: none;
        border: none;
        background: #0686b1;
        border-left: 1px solid #f0f3bd;
        border-right: 1px solid #f0f3bd;
        font-weight: bold;
        color: #055d80;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        :hover {
          background: #05668d;
          color: #0686b1;
        }
        :focus {
          background: #00a896;
          color: #05668d;
        }

        img {
          width: 25px;
          height: 25px;
        }
      }
    }
  }
`;

export const PaginationRick = styled(PaginationPoke)`
  div {
    div {
      button {
        background: #79dbac;
        border-left: 1px solid #f0f3bd;
        border-right: 1px solid #f0f3bd;
        color: #00a393;

        :hover {
          background: #02c39a;
          color: #028090;
        }
        :focus {
          background: #02c39a;
          color: #05668d;
        }
        :active {
          background: #00a896;
          color: #05668d;
        }
      }
    }
  }
`;

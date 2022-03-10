import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 9vh;
  padding: 0 30px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  align-items: center;

  .wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 23px;
    font-weight: 500;
    cursor: default;
  }

  .ico {
    cursor: pointer;

    &:hover {
      color: rgb(35,116,225);
    }
  }
`;

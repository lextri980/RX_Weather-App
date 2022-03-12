import styled from "styled-components";

export const Container = styled.div`
  height: 450px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  .col-1,
  .col-2 {
    .typo {
      height: 55px;
      display: flex;
      align-items: center;
      font-family: "hubballiregular";
      font-size: 20px;
      font-weight: 500;

      .icon {
        margin-right: 20px;
        font-size: 30px;
      }
    }
  }
`;

export const ContainerNoContent = styled.div`
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    font-family: "hubballiregular";
    font-size: 25px;
    display: flex;
    justify-content: center;
  }

  img {
    width: 400px;
  }
`;

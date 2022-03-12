import styled from "styled-components";

export const Container = styled.div`
  .header {
    display: flex;
    align-items: center;
    justify-content: center;

    .text {
      margin-right: 30px;
      width: 500px;
    }

    .btn {
      height: 40px;
    }
  }

  .body{
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
`;

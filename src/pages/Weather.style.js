import styled from "styled-components";

export const Container = styled.div`
  margin: 30px 40px;
  height: 82vh;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19);
  display: flex;

  .left-side {
    width: 30%;
    
    img{
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  .right-side{
    display: flex;
    flex-direction: column;
    width: 70%;
    align-items: center;
    padding-top: 30px;
  }
`;

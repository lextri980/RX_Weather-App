import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 91vh;
  overflow-y: auto;


  .information{
    font-family: 'hubballiregular';
    padding: 20px;
    width: 100%;
    height: 39vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .name{
      font-size: 50px;
      font-weight: 700;
      margin-bottom: 20px;
    }

    .date, .hour {
      font-size: 30px;
      margin-bottom: 10px;
      font-weight: 500;
    }
  }

  hr {
    width: 200px;
    height: 4px;
    background-color: #90E0EF;
    border: none;
    margin: 0 auto;
  }

  .cv{
    width: 100%;
    height: 60vh;
    padding: 30px;
  }
`;
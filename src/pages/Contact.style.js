import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 91vh;
  font-family: 'hubballiregular';

  .author {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .title{
      font-size: 40px;
      font-weight: 600;
      margin-bottom: 40px;
    }

    .name {
      font-size: 30px;
      margin-bottom: 20px;
    }

    .contact{
      .icon {
        font-size: 40px;
      }

      .icon-middle{
        font-size: 40px;
        margin: 0 20px;
      }
    }

  }
`;
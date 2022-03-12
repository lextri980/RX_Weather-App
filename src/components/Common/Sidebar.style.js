import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 350px;
  min-width: 350px;
  background-color: rgb(19, 148, 135);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 230px;
    height: 230px;
    border-radius: 100%;
    margin: 40px 0;
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
    cursor: default;

    .p-prj{
      font-size: 20px;
    } 

    .p-prj-sub{
      font-size: 16px;
    } 

    p {
      color: white;
      margin-bottom: 15px;
      font-size: 16px;
      font-weight: 500;
    }
  }

  .navbar {
    width: 100%;

    a{
      text-decoration: none;
    }

    .navbar-item {
      display: flex;
      align-items: center;
      width: 50%;
      height: 60px;
      color: white;
      font-size: 20px;
      font-weight: 450;
      margin-left: 100px;
      transition: margin-left 0.5s;

      span{
        margin-left: 10px;
      }

      .click-span {
        color: #5EE6EB;
      }

      &:hover {
        margin-left: 120px;
      }
    }
  }
`;

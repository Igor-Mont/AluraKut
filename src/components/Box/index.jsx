import styled from 'styled-components'

const Box = styled.div`
  background: #FFFFFF;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 10px;

  p {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  }

  .info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    div {
      background: #308bc5;
      border-radius: 8px;
      width: 20px;
      height: 20px;
      display: none;
      justify-content: center;
      align-items: center;
    }
  }

  .boxLink {
    font-size: 14px;
    color: #2E7BB4;
    text-decoration: none;
    font-weight: 800;
  }
  .title {
    font-size: 32px;
    font-weight: 400;
    margin-bottom: 20px;
  }
  .subTitle {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 20px;
  }
  .smallTitle {
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 700;
    color: #333333;
    margin-bottom: 20px;
  }
  hr {
    margin-top: 12px;
    margin-bottom: 8px;
    border-color: transparent;
    border-bottom-color: #ECF2FA;
  }
  input {
    width: 100%;
    background-color: #F4F4F4;
    color: #333333;
    border: 0;
    padding: 14px 16px;
    margin-bottom: 14px;
    border-radius: 10000px;
    ::placeholder {
      color: #333333;
      opacity: 1;
    }
  }
  button {
    border: 0;
    padding: 8px 12px;
    color: #FFFFFF;
    border-radius: 10000px;
    background-color: #6F92BB;
  }
`;

export default Box;
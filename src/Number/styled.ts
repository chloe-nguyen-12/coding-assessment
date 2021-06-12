import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .container {
    display: flex;
    justify-content: center;
    .item {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 3px;
      height: 100px;
      width: 100px;
      background-color: yellowgreen;
    }
  }
  button {
    margin-top: 20px;
    padding: 3px 10px;
    cursor: pointer;
    background: lavender;
  }
`;

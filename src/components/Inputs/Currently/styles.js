import styled from "styled-components";

const fontSize = "24px";
const fontFamily = "Roboto";

export const InputContainer = styled.div`
  width: 100%;
  height: 75px;
  background-color: #1e341dff;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  font-size: ${fontSize};
  font-family: ${fontFamily};

  input {
    width: 100%;
    height: 75px;
    background-color: #1e341dff;
    color: #aaffaa;
    border: 0;
    padding: 0 10px;

    font-size: ${fontSize};
    font-family: ${fontFamily};
    text-align: right;

  }
`;

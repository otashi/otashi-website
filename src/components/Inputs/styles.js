import styled from "styled-components";

const StyledInput = styled.input`
  padding: 8px 0;
  max-width: 247px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid var(--n90);
  border-radius: 0;

  &:focus {
    outline: none;
    color: var(--n900);
    border: none;
    border-bottom: 1px solid var(--n900);
  }

  &::placeholder {
    color: var(--n200);
  }

  @media screen and (max-width: 550px) {
    max-width: 350px;
    width: 300px;
  }
`;

const StyledTextArea = styled.textarea`
  padding-top: 8px;
  width: 100%;
  font-family: Ubuntu, sans-serif;
  font-size: 13.333px;
  line-height: 11px;
  border: none;
  border-bottom: 1px solid var(--n90);
  border-radius: 0;
  background-color: transparent;
  resize: none;

  &:focus {
    outline: none;
    color: var(--n900);
    border: none;
    border-bottom: 1px solid var(--n900);
  }

  &::placeholder {
    color: var(--n200);
    padding: 0;
  }

  @media screen and (max-width: 550px) {
    max-width: 350px;
    width: 300px;
  }
`;

export { StyledInput, StyledTextArea };

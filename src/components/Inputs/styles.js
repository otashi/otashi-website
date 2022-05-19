import styled from "styled-components";

const StyledInput = styled.input`
  padding: 8px 0;
  max-width: 247px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid var(--n90);

  &:focus {
    outline: none;
    color: var(--n900);
    border: none;
    border-bottom: 1px solid var(--n900);
  }

  &::placeholder {
    color: var(--n900);
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
  background-color: transparent;
  resize: none;

  &:focus {
    outline: none;
    color: var(--n900);
    border: none;
    border-bottom: 1px solid var(--n900);
  }

  &::placeholder {
    color: var(--n900);
  }
`;

export { StyledInput, StyledTextArea };

import styled from "styled-components";

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 44px;
  row-gap: 8px;

  @media screen and (max-width: 550px) {
    grid-template-columns: auto;
    justify-content: center;
  }
`;

const StyledTextArea = styled.div`
  grid-column: 1 / span 2;

  @media screen and (max-width: 550px) {
    grid-column: 1 / 2;
  }
`;

const StyledButton = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: flex-end;
  grid-column: 2 / span 1;

  @media screen and (max-width: 550px) {
    grid-column: 1 / 2;
    justify-content: center;
  }
`;

export { StyledForm, StyledTextArea, StyledButton };

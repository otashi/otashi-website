import styled from "styled-components";

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 44px;
  row-gap: 8px;
`;

const StyledTextArea = styled.div`
  grid-column: 1 / span 2;
`;

const StyledButton = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: flex-end;
  grid-column: 1 / span 2;
`;

export { StyledForm, StyledTextArea, StyledButton };

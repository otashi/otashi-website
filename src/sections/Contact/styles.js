import styled from "styled-components";

const StyledContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(auto, 538px);
  row-gap: 48px;
`;

const StyledContactDataContainer = styled.div`
  display: flex;
  gap: 48px;
  grid-column-start: 2;
`;

const StyledContactForm = styled.div`
  grid-column-start: 2;
`;

export {
  StyledContactContainer,
  StyledContactDataContainer,
  StyledContactForm,
};

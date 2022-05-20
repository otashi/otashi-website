import styled from "styled-components";

const StyledContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(auto, 538px);
  row-gap: 48px;

  @media screen and (max-width: 550px) {
    margin-top: 28px;
    row-gap: 32px;
  }
`;

const StyledContactDataContainer = styled.div`
  display: flex;
  gap: 48px;
  grid-column-start: 2;
  flex-wrap: wrap;

  @media screen and (max-width: 550px) {
    justify-content: center;
    gap: 24px;
  }
`;

const StyledContactForm = styled.div`
  grid-column-start: 2;
`;

export {
  StyledContactContainer,
  StyledContactDataContainer,
  StyledContactForm,
};

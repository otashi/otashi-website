import styled from "styled-components";

const StyledContactData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (max-width: 550px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const StyledIcon = styled.img`
  width: 32px;

  @media screen and (max-width: 550px) {
    width: 24px;
  }
`;

const StyledContactInfo = styled.div``;

const StyledLabel = styled.p`
  margin: 0 0 4px;
`;

const StyledData = styled.p`
  color: var(--n200);
  margin: 0;
`;

export {
  StyledContactData,
  StyledIcon,
  StyledContactInfo,
  StyledLabel,
  StyledData,
};

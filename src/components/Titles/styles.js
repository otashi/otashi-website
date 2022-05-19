import styled from "styled-components";

const StyledSectionTitle = styled.h2`
  font-size: 16px;
  font-weight: bold;
  color: var(--t500);
`;

const StyledSectionSubtitle = styled.p`
  font-size: 32px;
  font-weight: bold;
  max-width: 60%;
  line-height: 44px;

  @media screen and (max-width: 750px) {
    max-width: 100%;
    font-size: 24px;
    line-height: 34px;
  }

  @media screen and (max-width: 550px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export { StyledSectionTitle, StyledSectionSubtitle };

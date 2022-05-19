import styled from "styled-components";

const StyledHeaderLogo = styled.i`
  color: var(--t100);
  font-size: 42px;
  font-style: normal;

  @media screen and (max-width: 550px) {
    font-size: 28px;
  }
`;

const StyledFooterLogo = styled.i`
  color: var(--n100);
  font-style: normal;
  font-size: 42px;

  @media screen and (max-width: 550px) {
    font-size: 32px;
  }
`;

export { StyledHeaderLogo, StyledFooterLogo };

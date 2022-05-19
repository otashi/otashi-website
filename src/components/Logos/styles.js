import styled from "styled-components";

const StyledLogo = styled.i`
  color: var(--t100);
  font-size: ${({ px }) => `${px}px`};
  font-style: normal;
`;

const StyledFooterLogo = styled(StyledLogo)`
  color: var(--n100);
`;

export { StyledLogo, StyledFooterLogo };

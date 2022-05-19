import styled from "styled-components";

const StyledHeaderLogo = styled.i`
  color: var(--t100);
  font-size: ${({ px }) => `${px}px`};
  font-style: normal;
`;

const StyledFooterLogo = styled.i`
  color: var(--n100);
  font-style: normal;
  font-size: ${({ px }) => `${px}px`};
`;

export { StyledHeaderLogo, StyledFooterLogo };

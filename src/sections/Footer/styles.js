import styled from "styled-components";

const StyledFooter = styled.footer`
  margin: 100px auto 50px;
  padding-top: 32px;
  display: flex;
  justify-content: space-between;
  border-top: 2px solid var(--n100);
  color: var(--n100);
  max-width: 1000px;
`;

const StyledFooterInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StyledFooterInfo = styled.p`
  margin: 0;
`;

export { StyledFooter, StyledFooterInfoContainer, StyledFooterInfo };

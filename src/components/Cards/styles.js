import styled from "styled-components";

const StyledServiceCard = styled.div`
  width: 250px;
  height: 200px;
  padding: 28px;
  display: grid;
  row-gap: 32px;
  border: 1px solid var(--n50);
  border-radius: 16px;
  background-color: var(--n20);

  &:hover {
    border-color: var(--t500);
    background-color: var(--t50);
  }
`;

const StyledServiceCardContent = styled.div``;

const StyledServiceIcon = styled.img`
  width: 32px;
`;

const StyledServiceName = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin: 8px 0;
`;

const StyledServiceDescription = styled.p``;

const StyledServiceCardAction = styled.a`
  font-weight: bold;
  display: inline;
  width: 64px;
  color: var(--n900);
  padding-bottom: 4px;
  text-decoration: none;
  border-bottom: 2px solid var(--n900);
  transition: width 1s ease;

  &:hover {
    width: 100px;
  }
`;

export {
  StyledServiceCard,
  StyledServiceCardContent,
  StyledServiceIcon,
  StyledServiceName,
  StyledServiceDescription,
  StyledServiceCardAction,
};

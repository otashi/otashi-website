import styled from "styled-components";

const StyledServiceCard = styled.a`
  width: 250px;
  height: 200px;
  padding: 28px;
  display: grid;
  row-gap: 16px;
  border: 1px solid var(--n50);
  border-radius: 16px;
  background-color: var(--n20);
  text-decoration: none;
  color: var(--n900);

  &:hover {
    border-color: var(--t500);
    background-color: var(--t50);
    cursor: pointer;
  }

  @media screen and (max-width: 1000px) {
    height: 150px;
    padding: 16px;
  }

  @media screen and (max-width: 800px) {
    width: 350px;
    height: auto;
  }
`;

const StyledServiceCardContent = styled.div`
  @media screen and (max-width: 1000px) {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto auto;
    column-gap: 16px;
    row-gap: 8px;
  }
`;

const StyledServiceIcon = styled.img`
  width: 32px;

  @media screen and (max-width: 1000px) {
    width: 24px;
  }
`;

const StyledServiceName = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin: 8px 0;

  @media screen and (max-width: 1000px) {
    font-size: 16px;
    margin: 0;
  }
`;

const StyledServiceDescription = styled.p`
  margin: 0;
  grid-column: 1 / span 2;

  @media screen and (max-width: 800px) {
    grid-column: 2 / span 1;
  }
`;

const StyledServiceCardAction = styled.a`
  font-weight: bold;
  display: inline;
  align-self: flex-end;
  width: 64px;
  height: fit-content;
  color: var(--n900);
  padding-bottom: 4px;
  text-decoration: none;
  border-bottom: 2px solid var(--n900);
  transition: width 1s ease;

  &:hover {
    width: 100px;
  }

  @media screen and (max-width: 800px) {
    display: none;
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

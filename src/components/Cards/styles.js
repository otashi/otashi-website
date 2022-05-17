import styled from "styled-components";

const StyledServiceCard = styled.div`
  width: 250px;
  height: 200px;
  padding: 28px;
  border: 1px solid gray;
  border-radius: 16px;
  display: grid;
  row-gap: 32px;

  &:hover {
    background-color: lightcoral;
    border: none;
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
  color: black;
  padding-bottom: 4px;
  text-decoration: none;
  border-bottom: 2px solid black;
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

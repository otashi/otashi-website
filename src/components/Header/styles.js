import styled from "styled-components";

const StyledHeader = styled.header`
  position: sticky;
  height: 100px;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
`;

const StyledImg = styled.img`
  scale: 0.6;
`;

const StyledNav = styled.nav``;

const StyledList = styled.ul`
  display: flex;
  gap: 24px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const StyledListItem = styled.li`
  padding-bottom: 14px;

  &:hover {
    padding-bottom: 13px;
    border-bottom: 1px solid black;
  }
`;

const StyledAnchor = styled.a`
  text-decoration: none;
  color: black;
`;

export {
  StyledHeader,
  StyledImg,
  StyledNav,
  StyledList,
  StyledListItem,
  StyledAnchor,
};

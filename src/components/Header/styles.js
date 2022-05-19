import styled from "styled-components";

const StyledHeader = styled.header`
  position: sticky;
  height: 80px;
  top: 0;
  background-color: var(--n900);

  @media screen and (max-width: 500px) {
    height: 60px;
  }
`;

const StyledHeaderContainer = styled.div`
  height: 100%;
  margin: 0 auto;
  max-width: 1000px;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1200px) {
    margin: 0 100px;
  }

  @media screen and (max-width: 750px) {
    margin: 0 32px;
  }
`;

const StyledImg = styled.img``;

const StyledNav = styled.nav`
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const StyledList = styled.ul`
  display: flex;
  gap: 24px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const StyledListItem = styled.li``;

const StyledAnchor = styled.a`
  color: var(--n10);
  text-decoration: none;
`;

export {
  StyledHeader,
  StyledHeaderContainer,
  StyledImg,
  StyledNav,
  StyledList,
  StyledListItem,
  StyledAnchor,
};

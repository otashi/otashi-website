import styled from "styled-components";

const StyledAboutContainer = styled.section`
  margin: 100px 0;
`;

const StyledAboutTitle = styled.h2`
  font-size: 16px;
  font-weight: normal;
  color: darkslategray;
`;

const StyledAboutSubtitle = styled.p`
  font-size: 32px;
  font-weight: bold;
  max-width: 60%;
  line-height: 44px;
  text-transform: capitalize;
`;

const StyledAboutGrid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 32px;
`;

const StyledFigure = styled.figure`
  max-width: 500px;
  margin: 0;
`;

const StyledImage = styled.img`
  width: 100%;
  border-radius: 16px;
`;

const StyledAboutContent = styled.div``;

const StyledAboutContentText = styled.p`
  margin: 0 0 80px;
  line-height: 26px;
`;

const StyledSpan = styled.span`
  font-weight: 700;
`;

const StyledAboutContentList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export {
  StyledAboutContainer,
  StyledAboutTitle,
  StyledAboutSubtitle,
  StyledAboutGrid,
  StyledFigure,
  StyledImage,
  StyledAboutContent,
  StyledAboutContentText,
  StyledSpan,
  StyledAboutContentList,
};

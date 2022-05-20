import styled from "styled-components";

const StyledAboutGrid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 32px;

  @media screen and (max-width: 1100px) {
    grid-template-columns: 350px 1fr;
  }

  @media screen and (max-width: 850px) {
    grid-template-columns: auto;
    grid-template-rows: auto auto;
    row-gap: 48px;
  }
`;

const StyledFigure = styled.figure`
  max-width: 500px;
  margin: 0 auto;
`;

const StyledImage = styled.img`
  width: 100%;
  border-radius: 16px;
`;

const StyledAboutContent = styled.div``;

const StyledAboutContentText = styled.p`
  margin: 0 0 80px;
  line-height: 26px;

  @media screen and (max-width: 1100px) {
    margin-bottom: 42px;
  }
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
  StyledAboutGrid,
  StyledFigure,
  StyledImage,
  StyledAboutContent,
  StyledAboutContentText,
  StyledSpan,
  StyledAboutContentList,
};

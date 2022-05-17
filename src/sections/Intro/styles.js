import styled from "styled-components";

const StyledIntroContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const StyledIntroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledIntroTitle = styled.h1`
  font-size: 52px;
  margin: 0 0 28px;
`;

const StyledIntroSubtitle = styled.p`
  font-size: 24px;
`;

const StyledIntroAnchor = styled.a`
  width: 150px;
  padding: 16px 8px;
  border-radius: 4px;
  text-align: center;
  display: inline;
  background-color: black;
  color: white;
  text-decoration: none;
`;

const StyledIntroFigure = styled.figure``;

const StyledIntroImage = styled.img``;

export {
  StyledIntroContainer,
  StyledIntroTextContainer,
  StyledIntroTitle,
  StyledIntroSubtitle,
  StyledIntroAnchor,
  StyledIntroFigure,
  StyledIntroImage,
};

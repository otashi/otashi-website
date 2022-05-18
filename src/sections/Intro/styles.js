import styled from "styled-components";

const StyledIntroContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 90px 0 0;
  color: var(--n900);
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

const StyledIntroFigure = styled.figure``;

const StyledIntroImage = styled.img``;

export {
  StyledIntroContainer,
  StyledIntroTextContainer,
  StyledIntroTitle,
  StyledIntroSubtitle,
  StyledIntroFigure,
  StyledIntroImage,
};

import styled from "styled-components";

const StyledIntroContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 90px 0 0;
  color: var(--n900);

  @media screen and (max-width: 1120px) {
    grid-template-columns: 1fr 350px;
  }

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr 280px;
  }

  @media screen and (max-width: 650px) {
    grid-template-columns: auto;
  }

  @media screen and (max-width: 550px) {
    padding: 64px 0 0;
  }
`;

const StyledIntroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledIntroTitle = styled.h1`
  font-size: 52px;
  margin: 0 0 28px;

  @media screen and (max-width: 900px) {
    font-size: 42px;
  }

  @media screen and (max-width: 550px) {
    font-size: 32px;
    margin-bottom: 16px;
  }
`;

const StyledIntroSubtitle = styled.p`
  font-size: 24px;
  margin: 0 0 64px;

  @media screen and (max-width: 550px) {
    font-size: 16px;
    margin-bottom: 32px;
  }
`;

const StyledIntroFigure = styled.figure`
  margin: 0;
  @media screen and (max-width: 650px) {
    display: none;
  }
`;

const StyledIntroImage = styled.img`
  width: 100%;
`;

export {
  StyledIntroContainer,
  StyledIntroTextContainer,
  StyledIntroTitle,
  StyledIntroSubtitle,
  StyledIntroFigure,
  StyledIntroImage,
};

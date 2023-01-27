import { Typography } from "./common/Typography";
import { ScreenHeader } from "./components/Header";
import { ScreenFooter } from "./components/Footer";
import styled from "styled-components";
import julia from "./assets/julia.png";
import taisiiaStupak from "./assets/taisiiaStupak.png";
import juliaD from "./assets/juliaD.png";
import taisiiaSstupakV from "./assets/taisiiaSstupakV.png";
import { GalleryContainer } from "./components/ScrollContainer";

import "../src/index.css";

const ContainerLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: 200px;

  @media (max-width: 380px) {
    margin-top: 72px;
  }
`;

const TypographyTitle = styled(Typography)`
  margin: 0 407px 100px 260px;

  @media (max-width: 380px) {
    margin: 0 20px 64px 20px;
  }
`;

const PictureAndTextContainer = styled.div`
  height: 410px;
  display: flex;
  margin: 0 335px 100px 0;
  align-items: center;
  overflow: hidden;

  @media (max-width: 380px) {
    height: auto;
    flex-direction: column;
    margin: 0 auto 56px auto;
    overflow: visible;
  }
`;

const StyleImg = styled.img`
   width: 838px;
   height: "auto"; 

   @media (max-width: 380px) {
    width: 360px;
    height: 360px;
    object-fit:cover;
  }
`
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 90px;

  @media (max-width: 380px) {
    margin: 0 20px 0 20px;
  }
`
const TextContainerPositionRight = styled(TextContainer)`
    margin-left: 200px;
    margin-right: 123px;

  @media (max-width: 380px) {
    order: 2;
    margin-left: 20px;
    margin-right: 20px;
  }
`

const TextContainerTitle = styled(Typography)`
  margin: 0 0 25px 0;

  @media (max-width: 380px) {
    margin: 40px auto 20px auto;
  }
`

export const HomeScreen = () => {
  return (
    <ContainerLayout>
      <ScreenHeader />
      
      <ContentContainer>
        <TypographyTitle size="large">
          UT ALIQUIP <br className="visible-mobile-display" />  EX EA COMMODO <br className="visible-mobile-display" /> CONSEQUAT
        </TypographyTitle>

        <PictureAndTextContainer>
          <StyleImg src={julia}/>
          <TextContainer>
            <TextContainerTitle
              size="large"
            >Lorem ipsum dolor sit <br className="none-mobile-display" /> amet, consectetur<br className="none-mobile-display" /> adipiscing elit
            </TextContainerTitle>
            <Typography size="small">
              Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br /> <br />
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </Typography>
          </TextContainer>
        </PictureAndTextContainer>

        <PictureAndTextContainer>
          <TextContainerPositionRight className="movement_down">
            <TextContainerTitle
              size="large"
            >Lorem ipsum dolor sit <br className="none-mobile-display" /> amet, consectetur<br className="none-mobile-display" /> adipiscing elit
            </TextContainerTitle>
            <Typography size="small">
              Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br /> <br />
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </Typography>
          </TextContainerPositionRight>
          <StyleImg className="movement_upward" src={taisiiaStupak}/>
        </PictureAndTextContainer>

        <TypographyTitle size="large" id="container"> 
          LOREM IPSUM <br className="visible-mobile-display" /> DOLOR SIT AMET
        </TypographyTitle>

        <GalleryContainer/>

        <TypographyTitle size="large" id="container"> 
          UT ALIQUIP <br className="visible-mobile-display" />  EX EA COMMODO <br className="visible-mobile-display" /> CONSEQUAT
        </TypographyTitle>

        <PictureAndTextContainer>
        <StyleImg src={juliaD}/>
          <TextContainer>
          <TextContainerTitle
              size="large"
            >Lorem ipsum dolor sit <br className="none-mobile-display" /> amet, consectetur<br className="none-mobile-display" /> adipiscing elit
            </TextContainerTitle>
            <Typography size="small">
              Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br /> <br />
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </Typography>
          </TextContainer>
        </PictureAndTextContainer>

        <PictureAndTextContainer>
          <TextContainerPositionRight className="movement_down">
          <TextContainerTitle
              size="large"
            >Lorem ipsum dolor sit <br className="none-mobile-display" /> amet, consectetur<br className="none-mobile-display" /> adipiscing elit
            </TextContainerTitle>
            <Typography size="small">
              Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br /> <br />
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </Typography>
          </TextContainerPositionRight>
          <StyleImg className="movement_upward" src={taisiiaSstupakV}/>
        </PictureAndTextContainer>

      </ContentContainer>

      <ScreenFooter />
    </ContainerLayout>
  );
};
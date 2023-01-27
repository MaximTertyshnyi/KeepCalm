import styled from "styled-components";
import { Tween } from "react-gsap";
import { gsap } from "gsap";
import { SlowMo } from "gsap/EasePack";
import { galery } from "../common/ImgMassive";

gsap.registerPlugin(SlowMo);

const Container = styled.div`
  width: 100%;
  gap: 50px;
  display: flex;
  padding: 50px 0 50px 0;
  margin-left: 200px;
  margin-bottom: 100px;

  @media (max-width: 380px) {
    gap: 20px;
    margin-left: 20px;
    padding: 0;
  }
`;

const ContainerNoSwipe = styled(Container)`
  @media (max-width: 380px) {
    overflow: hidden;
    overflow-x: scroll;
    white-space: nowrap;
  }
`;

const ScrollContainer = () => {
  return (
    <Tween
      to={{
        xPercent: -210,
        scrollTrigger: {
          trigger: "#square",
          start: "105px center",
          end: "480px center",
          scrub: 1,
          markers: false,
        },
        ease: "slow(0.1, 0.2)",
      }}
    >
      <Container>{galery}</Container>
    </Tween>
  );
};

const NoneScrollContainer = () => {
  return <ContainerNoSwipe>{galery}</ContainerNoSwipe>;
};

export const GalleryContainer = () => {
  const sizeWindowMobileVersion = 380;
  if (window.innerWidth <= sizeWindowMobileVersion) {
    return <NoneScrollContainer />;
  } else {
    return <ScrollContainer />;
  }
};

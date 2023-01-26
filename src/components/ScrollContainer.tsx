import React from "react";
import styled from "styled-components";
import { Tween } from "react-gsap";
import { gsap } from "gsap";
import { SlowMo } from "gsap/EasePack";
import { galery } from "../common/ImgMassive";

gsap.registerPlugin(SlowMo);

const Conteiner = styled.div`
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

const ConteinerNoSwipe = styled(Conteiner)`
  @media (max-width: 380px) {
    overflow: hidden;
    overflow-x: scroll;
    white-space: nowrap;
  }
`;

const ScrollContainer = () => {
  const [timer, setTimer] = React.useState(5);

  React.useEffect(() => {
    window.setInterval(() => {
      setTimer((time) => time - 10);
    }, 1000);
  }, []);

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
      <Conteiner>{galery}</Conteiner>
    </Tween>
  );
};

const NoneScrollContainer = () => {
  return <ConteinerNoSwipe>{galery}</ConteinerNoSwipe>;
};

export const GalleryContainer = () => {
  const sizeWindowMobileVersion = 380;
  if (window.innerWidth <= sizeWindowMobileVersion) {
    return <NoneScrollContainer />;
  } else {
    return <ScrollContainer />;
  }
};

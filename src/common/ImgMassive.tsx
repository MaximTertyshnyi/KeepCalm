import styled from "styled-components";
import jasminChew from "../assets/jasminChew.png";
import roller from "../assets/roller.png";
import joeyyLee from "../assets/joeyyLee.png";
import goldSet from "../assets/goldSet.png";
import goldRings from "../assets/goldRings.png";
import earRings from "../assets/earRings.png";
import ChainStone from "../assets/ChainStone.png";
import catHan from "../assets/catHan.png";
import angelicaEcheverry from "../assets/angelicaEcheverry.png";
import andresProfile from "../assets/andresProfile.png";
import andresFace from "../assets/andresFace.png";
import andresBody from "../assets/andresBody.png";

const ImgGalery = styled.img`
  width: 400px;
  height: 600px;

  @media (max-width: 380px) {
    height: 344px;
    width: 225px;
    display: inline-block;
  }
`;

export const galery = [
  <ImgGalery src={jasminChew} />,
  <ImgGalery src={angelicaEcheverry} />,
  <ImgGalery src={joeyyLee} />,
  ,
  <ImgGalery src={catHan} />,
  <ImgGalery src={ChainStone} />,
  <ImgGalery src={andresFace} />,
  <ImgGalery src={roller} />,
  <ImgGalery src={earRings} />,
  <ImgGalery src={andresBody} />,
  <ImgGalery src={goldSet} />,
  <ImgGalery src={andresProfile} />,
  <ImgGalery id="square" src={goldRings} />,
];

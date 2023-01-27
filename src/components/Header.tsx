import styled from "styled-components";
import { Typography } from "../common/Typography";
import logo from "../assets/logo.svg";
import { BsTelephone } from "react-icons/bs";

const Header = styled.div`
  height: 100px;
  background: rgba(1, 1, 1, 1);
  align-items: center;
  display: flex;
  background: linear-gradient(rgba(1, 1, 1, 1) 0%, rgba(70, 67, 65, 1) 100%);

  @media (max-width: 380px) {
    height: 60px;
  }
`;

const Logo = styled.img`
  width: 213px;
  height: 36px;

  @media (max-width: 380px) {
    width: 114px;
  }
`;

const ContainerHeader = styled.div`
  display: flex;
  width: 100%;
  margin: 0 262px 0 262px;
  flex-direction: row;
  align-items: center;
  text-align: center;
  justify-content: space-between;

  @media (max-width: 380px) {
    margin: 0 20px 0 20px;
  }
`;

const CustomHeaderTypography = styled(Typography)`
  font-size: 24px;
  font-weight: 500;
  line-height: 33px;
  color: white;

  @media (max-width: 380px) {
    display: none;
    z-index: 0;
  }
`;

const TelephoneIcon = styled(BsTelephone)`
  display: none;

  @media (max-width: 380px) {
    display: block;
    color: white;
    width: 20px;
    height: 20px;
    z-index: 1;
  }
`;

export const ScreenHeader = () => {
  return (
    <Header>
      <ContainerHeader>
        <Logo src={logo} />
        <a style={{ textDecoration: "none" }} href="tel:+7 (495) 495-49-54">
          <CustomHeaderTypography text="+7 (495) 495-49-54" size="custom" />
          <TelephoneIcon />
        </a>
      </ContainerHeader>
    </Header>
  );
};

import styled from "styled-components";
import { Typography } from "../common/Typography";

const Footer = styled.div`
  display: flex;
  height: 200px;
  width: 100%;
  background: black;
`;

const CustomFooterTypography = styled(Typography)`
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  color: white;
  margin: auto auto 18px auto;
`;

export const ScreenFooter = () => {
  return (
    <Footer>
      <CustomFooterTypography text=" © TEST, 1022–2022" size="custom" />
    </Footer>
  );
};

import { ReactElement } from "react";
import styled from "styled-components";

const BaseTypography = styled.span<{ secondary?: boolean }>`
  font-family: "Roboto";
  color: black;
`;

const LargeTypography = styled(BaseTypography)<{ secondary?: boolean }>`
  font-weight: 500;
  font-size: 48px;
  line-height: 62px;
  font-family: "Orchidea Pro Medium";

  @media (max-width: 380px) {
    font-size: 24px;
    line-height: 31px;
  }
`;

const SmallTypography = styled(BaseTypography)<{ secondary?: boolean }>`
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  font-family: "Manrope";

  @media (max-width: 380px) {
    font-size: 14px;
    line-height: 18px;
  }
`;

interface TypographyProps {
  size: "large" | "small" | "custom";
  text?: string;
  className?: any;
  children?: any;
}

export const Typography = (props: TypographyProps) => {
  const { size, text, className, children } = props;

  switch (size) {
    case "large":
      return (
        <LargeTypography className={className}>
          {" "}
          {text || children}{" "}
        </LargeTypography>
      );
    case "small":
      return (
        <SmallTypography className={className}>
          {text || children}
        </SmallTypography>
      );
    case "custom":
      return <SmallTypography className={className}>{text}</SmallTypography>;
  }
  return null;
};

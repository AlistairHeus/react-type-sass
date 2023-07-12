import React, { ReactNode, CSSProperties, FC } from "react";

type ElementType =
  | "div"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span";

const baseFontSizes = {
  h1: 2.5,
  h2: 2.25,
  h3: 2,
  h4: 1.75,
  h5: 1.5,
  h6: 1.25,
  p: 0.75,
  div: 0.75,
  span: 0.75
};

const lineHeightMultipliers = {
  h1: 1.2,
  h2: 1.2,
  h3: 1.2,
  h4: 1.2,
  h5: 1.2,
  h6: 1.2,
  p: 1.5,
  div: 1.5,
  span: 1.5
};

interface TypographyProps {
  stylesVariant?: ElementType;
  domVariant?: ElementType;
  id?: string;
  className?: string;
  sizeMultiplier?: number;
  fontSizeVw?: number;
  fontSizeVh?: number;
  fontSizeVmin?: number;
  customLineHeight?: CSSProperties["lineHeight"];
  children?: ReactNode;
}

const TypographyAlt: FC<TypographyProps> = ({
  stylesVariant = "div",
  id = "",
  className = "",
  sizeMultiplier = 1,
  fontSizeVw = 1,
  fontSizeVh = 1,
  fontSizeVmin = 0.5,
  domVariant = "div",
  children = null
}) => {
  const baseFontSize = baseFontSizes[stylesVariant];

  const calcFontSize = `calc(${
    fontSizeVw * baseFontSize * sizeMultiplier
  }vw + ${fontSizeVh * baseFontSize * sizeMultiplier}vh + ${
    fontSizeVmin * baseFontSize * sizeMultiplier
  }vmin)`;

  const fontSize = `clamp(1rem, ${calcFontSize} , 10rem)`;
  // const fontSize = `clamp(2 * ${sizeMultiplier}rem, 10vmin + 1rem ,8rem * 2 * ${sizeMultiplier}rem)`;

  const baseLineHeight = lineHeightMultipliers[stylesVariant];

  const textStyle: CSSProperties = {
    lineHeight: baseLineHeight,
    fontSize,
    wordWrap: "break-word"
  };

  // const Element = type as ElementType;
  const Element = domVariant;

  return React.createElement(Element, {
    style: textStyle,
    children,
    id: id,
    className: className
  });
};

export { TypographyAlt };

import { CSSProperties, FC, ReactNode } from "react";

interface SectionProps {
  id?: string;
  className?: string;
  paddingMultiplier?: number;
  children?: ReactNode;
}

const Section: FC<SectionProps> = ({
  id = "",
  className = "",
  paddingMultiplier = 1,
  children = null
}) => {
  const basePadding = "calc(1vh + 1vw + 0.5vmin)"; // base padding
  const padding = `calc(${basePadding} * ${paddingMultiplier})`; // apply multiplier

  const style: CSSProperties = {
    width: "100%", // fill the parent container
    minHeight: "100vh",
    boxSizing: "border-box", // to include padding in width & height calculation
    padding, // calculated padding
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  };

  return (
    <div id={id} className={className} style={style}>
      {children}
    </div>
  );
};

export default Section;

import { CSSProperties, FC, ReactNode } from "react";

interface MainProps {
  id?: string;
  className?: string;
  paddingMultiplier?: number;
  children?: ReactNode;
}

const Main: FC<MainProps> = ({
  id = "",
  className = "",
  paddingMultiplier = 1,
  children = null
}) => {
  const basePadding = "calc(1vh + 1vw + 0.5vmin)"; // base padding
  const padding = `calc(${basePadding} * ${paddingMultiplier})`; // apply multiplier

  const style: CSSProperties = {
    width: "100%", // fill the parent container
    boxSizing: "border-box", // to include padding in width & height calculation
    flex: 1
  };

  return (
    <div id={id} className={className} style={style}>
      {children}
    </div>
  );
};

export default Main;

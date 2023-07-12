import { CSSProperties, FC, ReactNode } from "react";

interface FooterProps {
  id?: string;
  className?: string;
  paddingMultiplier?: number;
  children?: ReactNode;
}

const Footer: FC<FooterProps> = ({
  id = "",
  className = "",
  children = null
}) => {
  const style: CSSProperties = {
    width: "100%", // fill the parent container
    background: "red"
  };

  return (
    <div id={id} className={className} style={style}>
      {children}
    </div>
  );
};

export default Footer;

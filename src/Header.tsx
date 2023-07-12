import { CSSProperties, FC, ReactNode } from "react";

interface HeaderProps {
  id?: string;
  className?: string;
  paddingMultiplier?: number;
  children?: ReactNode;
}

const Header: FC<HeaderProps> = ({
  id = "",
  className = "",
  children = null
}) => {
  const style: CSSProperties = {
    width: "100%", // fill the parent container
    background: "blue"
  };

  return (
    <div id={id} className={className} style={style}>
      {children}
    </div>
  );
};

export default Header;

import { PropsWithChildren, FC } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";

import s from "./StyledLink.module.css";

interface Props {
  to: string;
  mod?: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
}

export const StyledLink: FC<PropsWithChildren<Props>> = ({
  children,
  to,
  mod = "primary",
  onClick,
  className,
}) => {
  return (
    <Link to={to} className={cn(s[`root_${mod}`], className)} onClick={onClick}>
      {children}
    </Link>
  );
};

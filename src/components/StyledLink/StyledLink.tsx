import { PropsWithChildren, FC } from "react";
import { Link } from "react-router-dom";

import s from "./StyledLink.module.css";

interface Props {
  to: string;
  mod?: "primary" | "secondary";
  onClick?: () => void;
}

export const StyledLink: FC<PropsWithChildren<Props>> = ({
  children,
  to,
  mod = "primary",
  onClick,
}) => {
  return (
    <Link to={to} className={s[`root_${mod}`]} onClick={onClick}>
      {children}
    </Link>
  );
};

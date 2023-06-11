import { PropsWithChildren, FC } from "react";
import { Link } from "react-router-dom";

import s from "./StyledLink.module.css";

interface Props {
  to: string;
  mod?: "primary" | "secondary";
}

export const StyledLink: FC<PropsWithChildren<Props>> = ({
  children,
  to,
  mod = "primary",
}) => {
  return (
    <Link to={to} className={s[`root_${mod}`]}>
      {children}
    </Link>
  );
};

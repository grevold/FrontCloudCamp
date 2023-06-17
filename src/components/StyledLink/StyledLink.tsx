import { PropsWithChildren, FC } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";

import s from "./StyledLink.module.css";

interface Props {
  to: string;
  mod?: "primary" | "secondary";
  disabled?: boolean;
}

export const StyledLink: FC<PropsWithChildren<Props>> = ({
  children,
  to,
  mod = "primary",
  disabled,
}) => {
  const className = disabled
    ? cn(s[`root_${mod}`], s.disabled)
    : s[`root_${mod}`];

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
};

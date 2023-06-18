import { PropsWithChildren, FC } from "react";
import cn from "classnames";

import s from "./StyledButton.module.css";

interface Props {
  onClick?: () => void;
  className?: string;
  type?: "submit";
  mod?: string;
}

export const StyledButton: FC<PropsWithChildren<Props>> = ({
  onClick,
  children,
  className,
  type,
  mod = "primary",
}) => {
  return (
    <button
      className={cn(s[`root_${mod}`], className)}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

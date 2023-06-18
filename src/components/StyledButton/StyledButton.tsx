import { PropsWithChildren, FC } from "react";
import cn from "classnames";

import s from "./StyledButton.module.css";

interface Props {
  onClick?: () => void;
  className?: string;
  type?: "submit";
}

export const StyledButton: FC<PropsWithChildren<Props>> = ({
  onClick,
  children,
  className,
  type,
}) => {
  return (
    <button className={cn(s.root, className)} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

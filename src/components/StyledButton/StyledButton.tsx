import { PropsWithChildren, FC } from "react";
import cn from "classnames";

import s from "./StyledButton.module.css";

interface Props {
  onClick: () => void;
  className?: string;
}

export const StyledButton: FC<PropsWithChildren<Props>> = ({
  onClick,
  children,
  className,
}) => {
  return (
    <button className={cn(s.root, className)} onClick={onClick}>
      {children}
    </button>
  );
};

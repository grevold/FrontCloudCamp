import { PropsWithChildren, FC } from "react";

import s from "./StyledButton.module.css";

interface Props {
  onClick: () => void;
}

export const StyledButton: FC<PropsWithChildren<Props>> = ({
  onClick,
  children,
}) => {
  return (
    <button className={s.root} onClick={onClick}>
      {children}
    </button>
  );
};

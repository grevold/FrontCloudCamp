import { PropsWithChildren, FC } from "react";
import ScrollLock from "react-scrolllock";

import s from "./ModalWindow.module.css";

interface Props {
  onClose: () => void;
}

export const ModalWindow: FC<PropsWithChildren<Props>> = ({
  children,
  onClose,
}) => {
  return (
    <ScrollLock>
      <div>
        <div className={s.background} onClick={onClose} />
        <div className={s.container}>{children}</div>
      </div>
    </ScrollLock>
  );
};

import { CrossCloseIcon } from "../../icons/CrossCloseIcon";
import { ErrorIcon } from "../../icons/ErrorIcon";
import { ModalWindow } from "../ModalWindow/ModalWindow";
import { StyledButton } from "../StyledButton/StyledButton";

import s from "./ModalWindowError.module.css";

interface Props {
  onClose: () => void;
}

export function ModalWindowError({ onClose }: Props) {
  return (
    <ModalWindow onClose={onClose}>
      <>
        <div className={s.header}>
          <h1>Ошибка</h1>
          <CrossCloseIcon />
        </div>
        <ErrorIcon className={s.errorIcon} />
        <div className={s.buttonWrap}>
          <StyledButton onClick={onClose}>Закрыть</StyledButton>
        </div>
      </>
    </ModalWindow>
  );
}

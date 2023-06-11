import { SuccessIcon } from "../../icons/SuccessIcon";
import { ModalWindow } from "../ModalWindow/ModalWindow";
import { StyledButton } from "../StyledButton/StyledButton";

import s from "./ModalWindowSuccess.module.css";

interface Props {
  onClose: () => void;
}

export function ModalWindowSuccess({ onClose }: Props) {
  return (
    <ModalWindow onClose={onClose}>
      <>
        <h1 className={s.header}>Форма успешно отправлена</h1>
        <SuccessIcon className={s.successIcon} />
        <StyledButton onClick={onClose} className={s.button}>
          На главную
        </StyledButton>
      </>
    </ModalWindow>
  );
}

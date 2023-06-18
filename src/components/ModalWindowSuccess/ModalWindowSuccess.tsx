import { SuccessIcon } from "../../icons/SuccessIcon";
import { RoutePath } from "../../types";
import { ModalWindow } from "../ModalWindow/ModalWindow";
import { StyledLink } from "../StyledLink/StyledLink";

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
        <StyledLink className={s.link} to={RoutePath.MainPage}>
          На главную
        </StyledLink>
      </>
    </ModalWindow>
  );
}

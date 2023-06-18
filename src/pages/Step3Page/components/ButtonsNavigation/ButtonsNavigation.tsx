import { StyledButton } from "../../../../components/StyledButton/StyledButton";
import cn from "classnames";

import s from "./ButtonsNavigation.module.css";

interface Props {
  className?: string;
  onClickPrev?: () => void;
}

export const ButtonsNavigation = ({ className, onClickPrev }: Props) => {
  return (
    <div className={cn(s.root, className)}>
      <StyledButton onClick={onClickPrev}>Назад</StyledButton>
      <StyledButton type="submit">Отправить</StyledButton>
    </div>
  );
};

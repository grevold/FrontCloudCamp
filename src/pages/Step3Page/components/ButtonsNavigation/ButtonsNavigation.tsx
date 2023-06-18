import { StyledButton } from "../../../../components/StyledButton/StyledButton";
import { StyledLink } from "../../../../components/StyledLink/StyledLink";
import { RoutePath } from "../../../../types";

import cn from "classnames";

import s from "./ButtonsNavigation.module.css";

interface Props {
  className?: string;
}

export const ButtonsNavigation = ({ className }: Props) => {
  return (
    <div className={cn(s.root, className)}>
      <StyledLink to={RoutePath.Step2Page} mod={"secondary"}>
        Назад
      </StyledLink>
      <StyledButton type="submit">Отправить</StyledButton>
    </div>
  );
};

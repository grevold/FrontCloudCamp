import { StyledButton } from "../../../../components/StyledButton/StyledButton";
import { StyledLink } from "../../../../components/StyledLink/StyledLink";
import { FormStep1Values, RoutePath } from "../../../../types";
import cn from "classnames";

import s from "./ButtonsNavigation.module.css";

interface Props {
  className?: string;
}

export const ButtonsNavigation = ({ className }: Props) => {
  return (
    <div className={cn(s.root, className)}>
      <StyledLink to={RoutePath.MainPage} mod={"secondary"}>
        Назад
      </StyledLink>
      <StyledButton type="submit">Далее</StyledButton>
    </div>
  );
};

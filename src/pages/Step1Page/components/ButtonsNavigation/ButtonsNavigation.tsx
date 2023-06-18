import { StyledButton } from "../../../../components/StyledButton/StyledButton";
import { StyledLink } from "../../../../components/StyledLink/StyledLink";
import { FormStep1Values, RoutePath } from "../../../../types";

import s from "./ButtonsNavigation.module.css";

interface Props {
  disabled?: boolean;
}

export const ButtonsNavigation = ({ disabled }: Props) => {
  return (
    <div className={s.root}>
      <StyledLink to={RoutePath.MainPage} mod={"secondary"}>
        Назад
      </StyledLink>
      <StyledButton type="submit">Далее</StyledButton>
    </div>
  );
};

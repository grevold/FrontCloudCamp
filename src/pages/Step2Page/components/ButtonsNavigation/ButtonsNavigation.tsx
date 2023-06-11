import { StyledLink } from "../../../../components/StyledLink/StyledLink";
import { RoutePath } from "../../../../types";

import s from "./ButtonsNavigation.module.css";

export function ButtonsNavigation() {
  return (
    <div className={s.root}>
      <StyledLink to={RoutePath.Step1Page} mod={"secondary"}>
        Назад
      </StyledLink>
      <StyledLink to={RoutePath.Step3Page}>Далее</StyledLink>
    </div>
  );
}

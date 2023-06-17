import { StyledLink } from "../../../../components/StyledLink/StyledLink";
import { RoutePath } from "../../../../types";

import s from "./ButtonsNavigation.module.css";

interface Props {
  disabled?: boolean;
}

export function ButtonsNavigation({ disabled }: Props) {
  return (
    <div className={s.root}>
      <StyledLink to={RoutePath.Step1Page} mod={"secondary"}>
        Назад
      </StyledLink>
      <StyledLink to={RoutePath.Step3Page} disabled={disabled}>
        Далее
      </StyledLink>
    </div>
  );
}

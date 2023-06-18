import { StyledLink } from "../../../../components/StyledLink/StyledLink";
import { RoutePath } from "../../../../types";

import s from "./ButtonsNavigation.module.css";

interface Props {
  disabled?: boolean;
}

export const ButtonsNavigation: React.FC<Props> = ({ disabled }) => {
  return (
    <div className={s.root}>
      <StyledLink to={RoutePath.Step2Page} mod={"secondary"}>
        Назад
      </StyledLink>
      <StyledLink to={RoutePath.MainPage} disabled={disabled}>
        Далее
      </StyledLink>
    </div>
  );
};

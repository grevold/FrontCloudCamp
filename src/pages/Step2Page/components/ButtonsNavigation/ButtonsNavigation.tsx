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
      <StyledLink to={RoutePath.Step1Page} mod={"secondary"}>
        Back
      </StyledLink>
      <StyledButton type="submit">Далее</StyledButton>
    </div>
  );
};

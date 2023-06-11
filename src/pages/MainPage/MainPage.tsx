import { Container } from "../../components/Container/Container";
import { StyledLink } from "../../components/StyledLink/StyledLink";

import s from "./MainPage.module.css";

export function MainPage() {
  return (
    <Container className={s.root}>
      <h1>main page</h1>
      <StyledLink to="/step1">Начать</StyledLink>
    </Container>
  );
}

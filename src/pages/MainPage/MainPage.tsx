import { Container } from "../../components/Container/Container";
import { StyledLink } from "../../components/StyledLink/StyledLink";
import { RoutePath } from "../../types";
import { Header } from "./components/Header/Header";

import s from "./MainPage.module.css";

export function MainPage() {
  return (
    <Container className={s.root}>
      <Header />
      <StyledLink to={RoutePath.Step1Page}>Начать</StyledLink>
    </Container>
  );
}

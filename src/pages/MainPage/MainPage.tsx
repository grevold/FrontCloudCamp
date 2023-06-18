import { Container } from "../../components/Container/Container";
import { Header } from "./components/Header/Header";
import { SignInForm } from "./components/SignInForm/SignInForm";

import s from "./MainPage.module.css";

export const MainPage = () => {
  return (
    <Container className={s.root}>
      <Header />
      <SignInForm onSubmit={console.log} />
    </Container>
  );
};

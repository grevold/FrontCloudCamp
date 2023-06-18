import { Container } from "../../components/Container/Container";
import { Header } from "./components/Header/Header";
import { SignInForm } from "./components/SignInForm/SignInForm";
import { useMainPage } from "./useMainPage";

import s from "./MainPage.module.css";

export const MainPage = () => {
  const { handleSubmit } = useMainPage();

  return (
    <Container className={s.root}>
      <Header />
      <SignInForm onSubmit={handleSubmit} />
    </Container>
  );
};

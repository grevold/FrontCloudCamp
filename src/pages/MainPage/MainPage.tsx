import { Container } from "../../components/Container/Container";
import { Header } from "./components/Header/Header";
import { SignInForm } from "./components/SignInForm/SignInForm";

import s from "./MainPage.module.css";

export function MainPage() {
  return (
    <Container className={s.root}>
      <Header />
      <SignInForm
        onClick={() => console.log("Hello, world!")}
        onSubmit={() => console.log("Hello, world!")}
      />
    </Container>
  );
}

import { Container } from "../../components/Container/Container";
import { FormContainer } from "../../components/FormContainer/FormContainer";
import { ButtonsNavigation } from "./components/ButtonsNavigation/ButtonsNavigation";

export function Step1Page() {
  return (
    <Container>
      <FormContainer>
        <h1>Step1Page</h1>
        <ButtonsNavigation />
      </FormContainer>
    </Container>
  );
}

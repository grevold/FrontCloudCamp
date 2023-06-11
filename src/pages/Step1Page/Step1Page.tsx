import { Container } from "../../components/Container/Container";
import { FormContainer } from "../../components/FormContainer/FormContainer";
import { ProgressBar } from "../../components/ProgressBar/ProgressBar";
import { ButtonsNavigation } from "./components/ButtonsNavigation/ButtonsNavigation";

export function Step1Page() {
  return (
    <Container>
      <FormContainer>
        <ProgressBar currentValue={4} maxValue={4} />
        <h1>Step1Page</h1>
        <ButtonsNavigation />
      </FormContainer>
    </Container>
  );
}

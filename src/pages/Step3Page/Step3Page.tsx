import { Container } from "../../components/Container/Container";
import { FormContainer } from "../../components/FormContainer/FormContainer";
import { ProgressBar } from "../../components/ProgressBar/ProgressBar";
import { ButtonsNavigation } from "./components/ButtonsNavigation/ButtonsNavigation";
import { FormStep3 } from "./components/FormStep3/FormStep3";

export function Step3Page() {
  return (
    <Container>
      <FormContainer>
        <ProgressBar currentValue={2} maxValue={3} />
        <FormStep3 />
      </FormContainer>
    </Container>
  );
}

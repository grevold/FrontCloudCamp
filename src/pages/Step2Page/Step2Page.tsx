import { Container } from "../../components/Container/Container";
import { FormContainer } from "../../components/FormContainer/FormContainer";
import { ProgressBar } from "../../components/ProgressBar/ProgressBar";
import { ButtonsNavigation } from "./components/ButtonsNavigation/ButtonsNavigation";
import { FormStep2 } from "./components/FormStep2/FormStep2";

export function Step2Page() {
  return (
    <Container>
      <FormContainer>
        <ProgressBar currentValue={2} maxValue={3} />
        <FormStep2 onSubmit={console.log} onClick={() => {}} />
        <ButtonsNavigation />
      </FormContainer>
    </Container>
  );
}

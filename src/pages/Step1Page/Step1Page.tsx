import { Container } from "../../components/Container/Container";
import { FormContainer } from "../../components/FormContainer/FormContainer";
import { ProgressBar } from "../../components/ProgressBar/ProgressBar";
import { FormStep1 } from "./components/FormStep1/FormStep1";

export function Step1Page() {
  return (
    <Container>
      <FormContainer>
        <ProgressBar currentValue={2} maxValue={3} />
        <FormStep1 onSubmit={() => {}} onClick={() => {}} />
      </FormContainer>
    </Container>
  );
}

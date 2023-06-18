import { Container } from "../../components/Container/Container";
import { FormContainer } from "../../components/FormContainer/FormContainer";
import { ProgressBar } from "../../components/ProgressBar/ProgressBar";
import { FormStep2 } from "./components/FormStep2/FormStep2";

export const Step2Page = () => {
  return (
    <Container>
      <FormContainer>
        <ProgressBar currentValue={2} maxValue={3} />
        <FormStep2 onSubmit={console.log} />
      </FormContainer>
    </Container>
  );
};

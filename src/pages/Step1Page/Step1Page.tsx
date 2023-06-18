import { Container } from "../../components/Container/Container";
import { FormContainer } from "../../components/FormContainer/FormContainer";
import { ProgressBar } from "../../components/ProgressBar/ProgressBar";
import { FormStep1 } from "./components/FormStep1/FormStep1";
import { useStep1Page } from "./useStep1Page";

export const Step1Page = () => {
  const { handleSubmit } = useStep1Page();

  return (
    <Container>
      <FormContainer>
        <ProgressBar currentValue={1} maxValue={3} />
        <FormStep1 onSubmit={handleSubmit} />
      </FormContainer>
    </Container>
  );
};

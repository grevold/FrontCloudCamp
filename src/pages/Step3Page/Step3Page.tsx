import { Container } from "../../components/Container/Container";
import { FormContainer } from "../../components/FormContainer/FormContainer";
import { ModalWindowError } from "../../components/ModalWindowError/ModalWindowError";
import { ModalWindowSuccess } from "../../components/ModalWindowSuccess/ModalWindowSuccess";
import { PreloaderScreen } from "../../components/PreloaderScreen/PreloaderScreen";
import { ProgressBar } from "../../components/ProgressBar/ProgressBar";
import { FormStep3 } from "./components/FormStep3/FormStep3";
import { Status, useStep3Page } from "./useStep3Page";

export const Step3Page = () => {
  const { state, handleSubmit, handleModalWindowClose } = useStep3Page();

  if (state.status === Status.Loading) {
    return <PreloaderScreen />;
  }

  return (
    <Container>
      {state.status === Status.Error && (
        <ModalWindowError
          onClose={handleModalWindowClose}
          errorMessage={state.errorMessage}
        />
      )}
      {state.status === Status.Success && (
        <ModalWindowSuccess onClose={handleModalWindowClose} />
      )}
      <FormContainer>
        <ProgressBar currentValue={3} maxValue={3} />
        <FormStep3 onSubmit={handleSubmit} />
      </FormContainer>
    </Container>
  );
};

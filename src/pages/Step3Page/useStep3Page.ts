import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { FormStep3Values, RoutePath } from "../../types";
import { userAsyncThunk } from "../../store/components/user/userAsyncThunk";
import { userStoreActions } from "../../store/components/user/userSlice";
import { useRedirectToPrevFormStep } from "../../hooks/useRedirectToPrevFormStep";
import { useNavigate } from "react-router";

export enum Status {
  Init = "Init",
  Loading = "Loading",
  Error = "Error",
  Success = "Success",
}

type State =
  | {
      status: Status.Init | Status.Loading | Status.Success;
    }
  | {
      status: Status.Error;
      errorMessage: string;
    };

export const useStep3Page = () => {
  const navigate = useNavigate();
  useRedirectToPrevFormStep();
  const [state, setState] = useState<State>({
    status: Status.Init,
  });
  const dispatch = useAppDispatch();
  const userStore = useAppSelector((state) => state.userStore);

  const handleSubmitError = (errorMessage: string) => {
    setState({
      status: Status.Error,
      errorMessage,
    });
  };

  const handleSubmitSuccess = () => {
    setState({
      status: Status.Success,
    });
  };

  const handleSubmitPrev = (formValues: FormStep3Values) => {
    dispatch(userStoreActions.addStep3InFormValues(formValues));
    navigate(RoutePath.Step2Page);
  };

  const handleSubmitNext = (formValues: FormStep3Values) => {
    setState({ status: Status.Loading });
    dispatch(userStoreActions.addStep3InFormValues(formValues));
    dispatch(userAsyncThunk({ ...userStore, formStep3Values: formValues }))
      .unwrap()
      .then(handleSubmitSuccess, handleSubmitError);
  };

  const handleModalWindowClose = () => {
    setState({
      status: Status.Init,
    });
  };

  return { state, handleSubmitPrev, handleSubmitNext, handleModalWindowClose };
};

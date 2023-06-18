import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/store";
import { userStoreActions } from "../../store/components/user/userSlice";
import { FormStep2Values, RoutePath } from "../../types";
import { useRedirectToPrevFormStep } from "../../hooks/useRedirectToPrevFormStep";

export const useStep2Page = () => {
  useRedirectToPrevFormStep();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = (formValues: FormStep2Values) => {
    dispatch(userStoreActions.addStep2InFormValues(formValues));
    navigate(RoutePath.Step3Page);
  };

  return { handleSubmit };
};

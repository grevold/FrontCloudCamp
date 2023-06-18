import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/store";
import { userStoreActions } from "../../store/components/user/userSlice";
import { FormStep1Values, RoutePath } from "../../types";
import { useRedirectToPrevFormStep } from "../../hooks/useRedirectToPrevFormStep";

export const useStep1Page = () => {
  useRedirectToPrevFormStep();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = (formValues: FormStep1Values) => {
    dispatch(userStoreActions.addStep1InFormValues(formValues));
    navigate(RoutePath.Step2Page);
  };

  return { handleSubmit };
};

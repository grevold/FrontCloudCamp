import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/store";
import { userStoreActions } from "../../store/components/user/userSlice";
import { FormStep2Values, RoutePath } from "../../types";

export const useStep2Page = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = (formValues: FormStep2Values) => {
    dispatch(userStoreActions.addStep2InFormValues(formValues));
    navigate(RoutePath.Step3Page);
  };

  return { handleSubmit };
};

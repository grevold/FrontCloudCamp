import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/store";
import { RoutePath, SignInFormValues } from "../../types";
import { userStoreActions } from "../../store/components/user/userSlice";

export const useMainPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = (formValues: SignInFormValues) => {
    dispatch(userStoreActions.addSignInFormValues(formValues));
    navigate(RoutePath.Step1Page);
  };

  return { handleSubmit };
};

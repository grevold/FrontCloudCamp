import { useLocation, useNavigate } from "react-router";
import { useAppSelector } from "../store/store";
import { RoutePath } from "../types";
import { useEffect } from "react";

export const useRedirectToPrevFormStep = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userStore = useAppSelector((store) => store.userStore);

  useEffect(() => {
    const { pathname } = location;

    if (pathname === RoutePath.Step1Page && !userStore.signInFormValues) {
      navigate(RoutePath.MainPage);
    }

    if (pathname === RoutePath.Step2Page && !userStore.formStep1Values) {
      navigate(RoutePath.Step1Page);
    }

    if (pathname === RoutePath.Step3Page && !userStore.formStep2Values) {
      navigate(RoutePath.Step2Page);
    }
  }, [location]);
};

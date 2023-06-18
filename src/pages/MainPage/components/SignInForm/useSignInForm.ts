import { useForm } from "react-hook-form";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { texts } from "../../../../texts";
import { SignInFormValues } from "../../../../types";
import { useAppSelector } from "../../../../store/store";

const { email, phone } = texts.Errors.SignIn;

const formSchema = object().shape({
  phone: string()
    .required(phone.required)
    .matches(/^\+7 \d{3} \d{3}-\d{2}-\d{2}$/, phone.valid),
  email: string().required(email.required).email(email.valid),
});

export const useSignInForm = (
  onSubmit: (formValues: SignInFormValues) => void
) => {
  const userStore = useAppSelector((state) => state.userStore);
  const { register, handleSubmit, formState } = useForm<SignInFormValues>({
    mode: "onTouched",
    // @ts-ignore
    resolver: yupResolver(formSchema),
    defaultValues: userStore.signInFormValues,
  });

  return { register, formState, handleSubmit: handleSubmit(onSubmit) };
};

import { useForm } from "react-hook-form";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { texts } from "../../../../texts";

// Значения, которые мы будем доставать из формы.
export interface FormValues {
  email: string;
  phone: string;
}

const { email, phone } = texts.Errors.SignIn;

const formSchema = object().shape({
  email: string().required(email.required).email(email.email),
  phone: string().required(phone.required).min(6, phone.min),
});

export const useSignInForm = (
  onSubmit: (email: string, phone: string) => void
) => {
  const { register, handleSubmit, formState } = useForm<FormValues>({
    mode: "onTouched",
    // @ts-ignore
    resolver: yupResolver(formSchema),
  });

  const submit = handleSubmit(({ email, phone }: FormValues) =>
    onSubmit(email, phone)
  );

  return { submit, register, formState };
};

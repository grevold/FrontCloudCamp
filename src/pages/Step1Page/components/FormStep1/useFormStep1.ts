import { useForm } from "react-hook-form";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { texts } from "../../../../texts";

// Значения, которые мы будем доставать из формы.
export interface FormValues {
  nickname: string;
  name: string;
  sername: string;
  sex: string;
}

const { nickname, name, sername, sex } = texts.Errors.Step1;

const formSchema = object().shape({
  nickname: string().required(nickname.required),
  name: string().required(name.required),
  sername: string().required(sername.required),
  sex: string().required(sex.required),
});

export const useFormStep1 = (
  onSubmit: (
    nickname: string,
    name: string,
    sername: string,
    sex: string
  ) => void
) => {
  const { register, handleSubmit, formState } = useForm<FormValues>({
    mode: "onTouched",
    // @ts-ignore
    resolver: yupResolver(formSchema),
  });

  const submit = handleSubmit(({ nickname, name, sername, sex }: FormValues) =>
    onSubmit(nickname, name, sername, sex)
  );

  return { submit, register, formState };
};

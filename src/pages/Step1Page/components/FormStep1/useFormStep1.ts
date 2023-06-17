import { useForm } from "react-hook-form";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { texts } from "../../../../texts";
import { Sex } from "../../../../types";

// Значения, которые мы будем доставать из формы.
export interface FormValues {
  nickname: string;
  name: string;
  sername: string;
  sex: Sex.Man | Sex.Woman;
}

const { nickname, name, sername, sex } = texts.Errors.Step1;

const formSchema = object().shape({
  nickname: string()
    .required(nickname.required)
    .matches(
      /^[a-zA-Zа-яА-ЯёЁ0-9]+$/,
      "Nickname может содержать только буквы и цифры"
    )
    .max(30, "Максимальная длина Nickname - 30 символов"),
  name: string()
    .required(name.required)
    .matches(/^[a-zA-Zа-яА-ЯёЁ]+$/, "Name может содержать только буквы")
    .max(50, "Максимальная длина Name - 50 символов"),
  sername: string()
    .required(sername.required)
    .matches(/^[a-zA-Zа-яА-ЯёЁ]+$/, "Sername может содержать только буквы")
    .max(50, "Максимальная длина Sername - 50 символов"),
  sex: string()
    .oneOf([Sex.Man, Sex.Woman], "Нужно указать пол")
    .required("Нужно указать пол"),
});

export const useFormStep1 = (
  onSubmit: (
    nickname: string,
    name: string,
    sername: string,
    sex: string
  ) => void
) => {
  const { register, handleSubmit, formState, control } = useForm<FormValues>({
    mode: "onTouched",
    // @ts-ignore
    resolver: yupResolver(formSchema),
  });

  const submit = handleSubmit(({ nickname, name, sername, sex }: FormValues) =>
    onSubmit(nickname, name, sername, sex)
  );

  return { submit, register, formState, control };
};

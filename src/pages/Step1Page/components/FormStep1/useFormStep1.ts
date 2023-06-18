import { useForm } from "react-hook-form";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { texts } from "../../../../texts";
import { FormStep1Values, Sex } from "../../../../types";
import { useAppSelector } from "../../../../store/store";

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
  onSubmit: (formValues: FormStep1Values) => void
) => {
  const userStore = useAppSelector((state) => state.userStore);
  const defaultValues = userStore.formStep1Values;
  const { register, handleSubmit, formState, control } =
    useForm<FormStep1Values>({
      mode: "onTouched",
      // @ts-ignore
      resolver: yupResolver(formSchema),
      defaultValues,
    });

  return {
    register,
    formState,
    control,
    handleSubmit: handleSubmit(onSubmit),
    defaultValues,
  };
};

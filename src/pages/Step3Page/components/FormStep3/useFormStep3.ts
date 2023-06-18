import { useState } from "react";
import { useForm } from "react-hook-form";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormStep3Values } from "../../../../types";
import { useAppSelector } from "../../../../store/store";

const formSchema = object().shape({
  about: string()
    .required("Заполните поле")
    .max(200, "Превышено количество символов"),
});

export function useFormStep3(
  onSubmitPrev: (formValues: FormStep3Values) => void,
  onSubmitNext: (formValues: FormStep3Values) => void
) {
  const userStore = useAppSelector((state) => state.userStore);
  const [count, setCount] = useState<number>(0);

  function getStringLengthWithOutSpaces(str: string): number {
    let result = 0;
    for (let char of str) {
      result += char === " " ? 0 : 1;
    }
    return result;
  }

  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setCount(getStringLengthWithOutSpaces(event.target.value));
  }

  const { register, formState, handleSubmit } = useForm<FormStep3Values>({
    mode: "onTouched",
    // @ts-ignore
    resolver: yupResolver(formSchema),
    defaultValues: userStore.formStep3Values,
  });

  const handleSubmitPrev = handleSubmit(onSubmitPrev);
  const handleSubmitNext = handleSubmit(onSubmitNext);

  return {
    count,
    handleChange,
    formState,
    register,
    handleSubmitPrev,
    handleSubmitNext,
  };
}

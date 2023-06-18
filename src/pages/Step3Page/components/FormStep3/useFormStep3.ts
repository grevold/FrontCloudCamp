import { useState } from "react";
import { useForm } from "react-hook-form";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormStep3Values } from "../../../../types";

const formSchema = object().shape({
  about: string()
    .required("Заполните поле")
    .max(200, "Превышено количество символов"),
});

export function useFormStep3(onSubmit: (formValues: FormStep3Values) => void) {
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
  });

  return {
    count,
    handleChange,
    formState,
    register,
    handleSubmit: handleSubmit(onSubmit),
  };
}

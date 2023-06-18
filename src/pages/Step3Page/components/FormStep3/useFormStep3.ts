import { useState } from "react";
import { useForm } from "react-hook-form";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// Значения, которые мы будем доставать из формы.
export interface FormValues {
  about: string;
}

const formSchema = object().shape({
  about: string()
    .required("Заполните поле")
    .max(200, "Превышено количество символов"),
});

export function useFormStep3(onSubmit: (about: string) => void) {
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

  const { register, formState, handleSubmit } = useForm<FormValues>({
    mode: "onTouched",
    // @ts-ignore
    resolver: yupResolver(formSchema),
  });

  const submit = handleSubmit(({ about }: FormValues) => onSubmit(about));

  return { count, handleChange, formState, register, submit };
}

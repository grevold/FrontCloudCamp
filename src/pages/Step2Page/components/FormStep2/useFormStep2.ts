import { useForm } from "react-hook-form";
import { array, object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { texts } from "../../../../texts";
import { useState } from "react";

// Значения, которые мы будем доставать из формы.
export interface FormValues {
  advantages: string[];
  checkBox: string;
  radio: string;
}

const { advantages, checkBox, radio } = texts.Errors.Step2;

const formSchema = object().shape({
  advantages: array().of(string().min(1, "advantage не должен быть пустым")),
  checkBox: array().min(1, "Нужно выбрать хотя бы один checkBox-элемент"),
  radio: string().required("Нужно выбрать хотя бы один radio-элемент"),
});

export const useFormStep2 = (
  onSubmit: (advantages: string[], checkBox: string, radio: string) => void
) => {
  const { register, handleSubmit, formState } = useForm<FormValues>({
    mode: "onTouched",
    // @ts-ignore
    resolver: yupResolver(formSchema),
  });
  const [advantages, setAdvantages] = useState<string[]>([""]);

  function removeElementFromArrayByIndex<T>(array: T[], index: number): T[] {
    const result = [];
    for (let i = 0; i < array.length; i++) {
      if (i !== index) {
        result.push(array[i]);
      }
    }
    return result;
  }

  const handleAddAdvantage = () =>
    setAdvantages((advantages) => [...advantages, ""]);
  const handleRemoveAdvantage = (index: number) =>
    setAdvantages((advantages) =>
      removeElementFromArrayByIndex(advantages, index)
    );

  const submit = handleSubmit(({ advantages, checkBox, radio }: FormValues) =>
    onSubmit(advantages, checkBox, radio)
  );

  return {
    submit,
    register,
    formState,
    advantages,
    handleAddAdvantage,
    handleRemoveAdvantage,
  };
};

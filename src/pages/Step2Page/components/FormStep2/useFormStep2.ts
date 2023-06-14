import { useForm } from "react-hook-form";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { texts } from "../../../../texts";

// Значения, которые мы будем доставать из формы.
export interface FormValues {
  advantages: string[];
  checkBox: string;
  radio: string;
}

const { advantages, checkBox, radio } = texts.Errors.Step2;

// .matches(/^[0-9]+$/, "Must be only digits")
const formSchema = object().shape({
  advantages: string().required(advantages.required),
  checkBox: string().required(checkBox.required),
  radio: string().required(radio.required),
});

export const useFormStep2 = (
  onSubmit: (advantages: string[], checkBox: string, radio: string) => void
) => {
  const { register, handleSubmit, formState } = useForm<FormValues>({
    mode: "onTouched",
    // @ts-ignore
    resolver: yupResolver(formSchema),
  });

  const submit = handleSubmit(({ advantages, checkBox, radio }: FormValues) =>
    onSubmit(advantages, checkBox, radio)
  );

  return { submit, register, formState };
};

import { FormState, UseFormRegister } from "react-hook-form";
import { FormStep2Values } from "../../../../types";
import { AdvantageInput } from "../AdvantageInput/AdvantageInput";
import { useAdvantagesForm } from "./useAdvantagesForm";

import s from "./AdvantagesForm.module.css";

interface Props {
  register: UseFormRegister<FormStep2Values>;
  formState: FormState<FormStep2Values>;
}

export const AdvantagesForm: React.FC<Props> = ({ register, formState }) => {
  const { advantages, handleRemoveAdvantage, handleAddAdvantage } =
    useAdvantagesForm();

  return (
    <div className={s.root}>
      <h1 className={s.header}>Advantages</h1>
      {advantages.map((_, index) => (
        <AdvantageInput
          key={index}
          fieldName={`advantages.${index}`}
          onRemove={() => handleRemoveAdvantage(index)}
          register={register}
          errorMessage={formState.errors?.advantages?.[index]?.message}
        />
      ))}
      <div className={s.addAdvantages} onClick={handleAddAdvantage}>
        +
      </div>
    </div>
  );
};

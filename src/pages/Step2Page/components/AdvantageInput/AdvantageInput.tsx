import { UseFormRegister } from "react-hook-form";
import { TrashIcon } from "../../../../icons/TrashIcon";
import { FormStep2Values } from "../../../../types";

import s from "./AdvantageInput.module.css";

interface Props {
  onRemove: () => void;
  errorMessage?: string;
  fieldName: string;
  register: UseFormRegister<FormStep2Values>;
}

export const AdvantageInput: React.FC<Props> = ({
  onRemove,
  errorMessage,
  fieldName,
  register,
}) => {
  return (
    <div className={s.root}>
      <input
        // @ts-ignore
        {...register(fieldName)}
        className={s.input}
        placeholder="Placeholder"
      />
      <button className={s.buttonDelete} onClick={onRemove}>
        <TrashIcon />
      </button>
      {errorMessage && <span className={s.error_message}>{errorMessage}</span>}
    </div>
  );
};

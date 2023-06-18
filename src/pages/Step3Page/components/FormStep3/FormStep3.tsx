import { ButtonsNavigation } from "../ButtonsNavigation/ButtonsNavigation";
import { FormStep3Values } from "../../../../types";
import { useFormStep3 } from "./useFormStep3";

import s from "./FormStep3.module.css";

interface Props {
  onSubmit: (formValues: FormStep3Values) => void;
}

export const FormStep3: React.FC<Props> = ({ onSubmit }) => {
  const { count, handleChange, formState, register, handleSubmit } =
    useFormStep3(onSubmit);
  const { errors } = formState;

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label className={s.label}>About</label>
      <div className={s.container}>
        <textarea
          {...register("about")}
          onChange={handleChange}
          className={s.textarea}
          placeholder="Placeholder"
        />
        <div className={s.scoreSymbols}>{count}/200</div>
      </div>
      <div className={s.tip}>Tip</div>
      {errors.about?.message && (
        <div className={s.error_message}>{errors.about?.message}</div>
      )}
      <ButtonsNavigation className={s.buttons} />
    </form>
  );
};

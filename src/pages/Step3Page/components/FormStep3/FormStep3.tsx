import { ButtonsNavigation } from "../ButtonsNavigation/ButtonsNavigation";
import { FormStep3Values } from "../../../../types";
import { useFormStep3 } from "./useFormStep3";

import s from "./FormStep3.module.css";

interface Props {
  onSubmitPrev: (formValues: FormStep3Values) => void;
  onSubmitNext: (formValues: FormStep3Values) => void;
}

export const FormStep3: React.FC<Props> = ({ onSubmitPrev, onSubmitNext }) => {
  const {
    count,
    handleChange,
    formState,
    register,
    handleSubmitPrev,
    handleSubmitNext,
  } = useFormStep3(onSubmitPrev, onSubmitNext);
  const { errors } = formState;

  return (
    <form onSubmit={handleSubmitNext} className={s.form}>
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
      <ButtonsNavigation onClickPrev={handleSubmitPrev} className={s.buttons} />
    </form>
  );
};

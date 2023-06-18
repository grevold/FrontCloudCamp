import { useFormStep2 } from "./useFormStep2";
import { AdvantagesForm } from "../AdvantagesForm/AdvantagesForm";
import { ButtonsNavigation } from "../ButtonsNavigation/ButtonsNavigation";
import { FormStep2Values } from "../../../../types";

import s from "./FormStep2.module.css";

interface Props {
  onSubmitPrev: (formValues: FormStep2Values) => void;
  onSubmitNext: (formValues: FormStep2Values) => void;
}

const checkBoxVariants = [1, 2, 3];
const radioVariants = [1, 2, 3];

export const FormStep2: React.FC<Props> = ({ onSubmitPrev, onSubmitNext }) => {
  const { handleSubmitPrev, handleSubmitNext, register, formState } =
    useFormStep2(onSubmitPrev, onSubmitNext);
  const { errors } = formState;

  return (
    <form onSubmit={handleSubmitNext} className={s.root}>
      <div className={s.container}>
        <AdvantagesForm register={register} formState={formState} />
        <div>
          <h1 className={s.header}>Checkbox group</h1>
          <div className={s.checkBoxes}>
            <ul className={s.checkBoxList}>
              {checkBoxVariants.map((value) => (
                <li key={value}>
                  <input
                    type="checkbox"
                    value={value}
                    {...register("checkBox")}
                    className={s.checkBox}
                  />
                  <span className={s.checkBoxValue}>{value}</span>
                </li>
              ))}
            </ul>
            {errors.checkBox?.message && (
              <span className={s.error_message}>
                {errors.checkBox?.message}
              </span>
            )}
          </div>
        </div>
        <div>
          <h1 className={s.header}>Radio group</h1>
          <div className={s.checkBoxes}>
            <ul className={s.checkBoxList}>
              {radioVariants.map((value) => (
                <li key={value}>
                  <input
                    type="radio"
                    value={value}
                    {...register("radio")}
                    className={s.checkBoxRadio}
                  />
                  <span className={s.checkBoxValue}>{value}</span>
                </li>
              ))}
            </ul>
            {errors.radio?.message && (
              <span className={s.error_message}>{errors.radio?.message}</span>
            )}
          </div>
        </div>
      </div>
      <ButtonsNavigation onClickPrev={handleSubmitPrev} className={s.buttons} />
    </form>
  );
};

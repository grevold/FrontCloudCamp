import { useFormStep2 } from "./useFormStep2";
import { TrashIcon } from "../../../../icons/TrashIcon";
import { ButtonsNavigation } from "../ButtonsNavigation/ButtonsNavigation";
import { FormStep2Values } from "../../../../types";

import s from "./FormStep2.module.css";

interface Props {
  onSubmit: (formValues: FormStep2Values) => void;
}

const checkBoxVariants = [1, 2, 3];
const radioVariants = [1, 2, 3];

export const FormStep2: React.FC<Props> = ({ onSubmit }) => {
  const {
    handleSubmit,
    register,
    formState,
    advantages,
    handleAddAdvantage,
    handleRemoveAdvantage,
  } = useFormStep2(onSubmit);
  const { errors } = formState;

  const AdvantageInput = ({ index }: { index: number }) => {
    const fieldName = `advantages.${index}`;
    const errorMessage = errors.advantages?.[index]?.message;

    return (
      <div className={s.item}>
        <input
          // @ts-ignore
          {...register(fieldName)}
          className={s.input}
          placeholder="Placeholder"
          key={index}
        />
        <button
          className={s.buttonDelete}
          onClick={() => handleRemoveAdvantage(index)}
        >
          <TrashIcon />
        </button>
        {errorMessage && (
          <span className={s.error_message}>{errorMessage}</span>
        )}
      </div>
    );
  };

  return (
    <form onSubmit={handleSubmit} className={s.root}>
      <div className={s.container}>
        <div className={s.advantages}>
          <h1 className={s.header}>Advantages</h1>
          {advantages.map((_, index) => (
            <AdvantageInput index={index} key={index} />
          ))}
          <button className={s.addAdvantages} onClick={handleAddAdvantage}>
            +
          </button>
        </div>
        <div className={s.checkBoxes}>
          <h1 className={s.header}>Checkbox group</h1>
          <ul className={s.checkBoxList}>
            {checkBoxVariants.map((value) => (
              <li key={value}>
                <input
                  type="checkbox"
                  value={value}
                  {...register("checkBox")}
                  className={s.checkBox}
                />
                <span>{value}</span>
              </li>
            ))}
          </ul>
          {errors.checkBox?.message && (
            <span className={s.error_message}>{errors.checkBox?.message}</span>
          )}
        </div>
        <div className={s.checkBoxes}>
          <h1 className={s.header}>Radio group</h1>
          <ul className={s.checkBoxList}>
            {radioVariants.map((value) => (
              <li key={value}>
                <input
                  type="radio"
                  value={value}
                  {...register("radio")}
                  className={s.checkBoxRadio}
                />
                <span>{value}</span>
              </li>
            ))}
          </ul>
          {errors.radio?.message && (
            <span className={s.error_message}>{errors.radio?.message}</span>
          )}
        </div>
      </div>
      <ButtonsNavigation />
    </form>
  );
};

import { useFormStep1 } from "./useFormStep1";
import { ButtonsNavigation } from "../ButtonsNavigation/ButtonsNavigation";
import { FormStep1Values, Sex } from "../../../../types";
import { Select } from "../../../../components/Select/Select";
import { Controller } from "react-hook-form";

import s from "./FormStep1.module.css";

interface Props {
  onSubmit: (formValues: FormStep1Values) => void;
}

export const FormStep1: React.FC<Props> = ({ onSubmit }) => {
  const { register, formState, handleSubmit, control, defaultValues } =
    useFormStep1(onSubmit);
  const { errors } = formState;

  return (
    <form onSubmit={handleSubmit} className={s.root}>
      <div className={s.container}>
        <div className={s.item}>
          <span className={s.title}>Nickname</span>
          <div className={s.input_area}>
            <input
              {...register("nickname")}
              className={s.input}
              placeholder="Placeholder"
            />
            {errors.nickname?.message && (
              <div className={s.error_message}>{errors.nickname?.message}</div>
            )}
          </div>

          <span className={s.tip}>Tip</span>
        </div>
        <div className={s.item}>
          <span className={s.title}>Name</span>
          <div className={s.input_area}>
            <input
              {...register("name")}
              className={s.input}
              placeholder="Placeholder"
            />
            {errors.name?.message && (
              <div className={s.error_message}>{errors.name?.message}</div>
            )}
          </div>
          <span className={s.tip}>Tip</span>
        </div>
        <div className={s.item}>
          <span className={s.title}>Sername</span>
          <div className={s.input_area}>
            <input
              {...register("sername")}
              className={s.input}
              placeholder="Placeholder"
            />
            {errors.sername?.message && (
              <div className={s.error_message}>{errors.sername?.message}</div>
            )}
          </div>
          <span className={s.tip}>Tip</span>
        </div>
        <div className={s.item}>
          <span className={s.title}>Sex</span>
          <div className={s.input_area}>
            <Controller
              name="sex"
              control={control}
              render={({ field: { onChange } }) => (
                <Select
                  defaultOption={defaultValues?.sex}
                  options={Object.values(Sex)}
                  onChange={onChange}
                />
              )}
            />
            {errors.sex && (
              <div className={s.error_message}>{errors.sex?.message}</div>
            )}
          </div>
        </div>
      </div>
      <ButtonsNavigation className={s.buttons} />
    </form>
  );
};

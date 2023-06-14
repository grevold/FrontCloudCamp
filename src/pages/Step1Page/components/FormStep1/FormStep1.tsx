import { useFormStep1 } from "./useFormStep1";
import { StyledLink } from "../../../../components/StyledLink/StyledLink";
import { RoutePath } from "../../../../types";

import s from "./FormStep1.module.css";

interface Props {
  onSubmit: (
    nickname: string,
    name: string,
    sername: string,
    sex: string
  ) => void;
  onClick: () => void;
}

export const FormStep1: React.FC<Props> = ({ onSubmit, onClick }) => {
  const { submit, register, formState } = useFormStep1(onSubmit);
  const { errors } = formState;

  return (
    <form onSubmit={submit} onClick={onClick} className={s.root}>
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
            <select {...register("sername")} className={s.select}>
              <option>man</option>
              <option>woman</option>
            </select>
            {errors.sex?.message && (
              <div className={s.error_message}>{errors.sex?.message}</div>
            )}
          </div>
        </div>
      </div>
    </form>
  );
};

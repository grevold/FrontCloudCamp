import { useSignInForm } from "./useSignInForm";
import { StyledLink } from "../../../../components/StyledLink/StyledLink";
import { RoutePath } from "../../../../types";

import s from "./SignInForm.module.css";

interface Props {
  onSubmit: (email: string, phone: string) => void;
  onClick: () => void;
}

export const SignInForm: React.FC<Props> = ({ onSubmit, onClick }) => {
  const { submit, register, formState } = useSignInForm(onSubmit);
  const { errors } = formState;

  return (
    <form onSubmit={submit} onClick={onClick} className={s.root}>
      <div className={s.inputs}>
        <div className={s.item}>
          <span className={s.title}>Номер телефона</span>
          <input
            {...register("phone")}
            type="tel"
            className={s.input}
            placeholder="+7 993 545 94 30"
          />
          {errors.phone?.message && (
            <div className={s.error_message}>{errors.phone?.message}</div>
          )}
        </div>
        <div className={s.item}>
          <span className={s.title}>Email</span>
          <input
            {...register("email")}
            type="email"
            className={s.input}
            placeholder="tim.jennings@example.com"
          />
          {errors.email?.message && (
            <div className={s.error_message}>{errors.email?.message}</div>
          )}
        </div>
      </div>

      <StyledLink to={RoutePath.Step1Page}>Начать</StyledLink>
    </form>
  );
};

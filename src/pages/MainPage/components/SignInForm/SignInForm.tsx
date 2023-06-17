import { useSignInForm } from "./useSignInForm";
import { StyledLink } from "../../../../components/StyledLink/StyledLink";
import { RoutePath } from "../../../../types";
import { withHookFormMask } from "use-mask-input";

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
      <div className={s.container}>
        <div className={s.item}>
          <span className={s.title}>Номер телефона</span>
          <input
            {...withHookFormMask(register("phone"), [
              "+7 999 999-99-99",
              "+7 999 999-99-99",
            ])}
            type="tel"
            className={s.input}
            placeholder="+7 999 999-99-99"
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
      <StyledLink to={RoutePath.Step1Page} disabled={!formState.isValid}>
        Начать
      </StyledLink>
    </form>
  );
};

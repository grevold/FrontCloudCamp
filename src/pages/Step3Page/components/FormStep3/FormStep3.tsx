import s from "./FormStep3.module.css";

export const FormStep3 = () => {
  return (
    <form className={s.form}>
      <label className={s.label}>About</label>
      <textarea className={s.textarea} />
      <div className={s.tip}>Tip</div>
    </form>
  );
};

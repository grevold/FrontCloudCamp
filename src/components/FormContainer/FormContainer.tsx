import { PropsWithChildren, FC } from "react";

import s from "./FormContainer.module.css";

export const FormContainer: FC<PropsWithChildren> = ({ children }) => {
  return <div className={s.root}>{children}</div>;
};

import { PropsWithChildren, FC } from "react";

import s from "./Container.module.css";

export const Container: FC<PropsWithChildren> = ({ children }) => {
  return <div className={s.root}>{children}</div>;
};

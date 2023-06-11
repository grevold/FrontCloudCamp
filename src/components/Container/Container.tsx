import { PropsWithChildren, FC } from "react";
import cn from "classnames";

import s from "./Container.module.css";

interface Props {
  className?: string;
}

export const Container: FC<PropsWithChildren<Props>> = ({
  children,
  className,
}) => {
  return <div className={cn(s.root, className)}>{children}</div>;
};

import { useSelect } from "./useSelect";
import { ChevronDown } from "../../icons/ChevronDown";
import cn from "classnames";

import s from "./Select.module.css";

interface Props {
  onChange: (option: string) => void;
  options: string[];
  defaultOption?: string;
  className?: string;
}

export const Select: React.FC<Props> = ({
  onChange,
  options,
  defaultOption,
  className,
}) => {
  const { ref, state, handleClick, handleChange } = useSelect(
    onChange,
    options,
    defaultOption
  );

  return (
    <div ref={ref} className={cn(s.root, className)}>
      <div className={s.head} onClick={handleClick}>
        <span>{state.option}</span>
        <ChevronDown className={s.icon} />
      </div>
      {state.isOpened && (
        <ul className={s.list}>
          {options
            .filter((option) => option !== state.option)
            .map((option) => (
              <li
                key={option}
                className={s.row}
                onClick={() => handleChange(option)}
              >
                {option}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

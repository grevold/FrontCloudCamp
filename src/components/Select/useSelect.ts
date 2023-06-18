import { useState } from "react";
import { useClickOutsideListener } from "../../hooks/useClickOutsideListener";

interface State {
  isOpened: boolean;
  option: string;
}

export const useSelect = (
  onChange: (option: string) => void,
  options: string[],
  defaultOption?: string
) => {
  const [state, setState] = useState<State>({
    isOpened: false,
    option: defaultOption || options[0],
  });

  const { ref } = useClickOutsideListener<HTMLDivElement>(() =>
    setState((prevState) => ({ ...prevState, isOpened: false }))
  );

  const handleClick = () =>
    setState((prevState) => ({ ...prevState, isOpened: !prevState.isOpened }));

  const handleChange = (option: string) => {
    setState({ isOpened: false, option });
    onChange(option);
  };

  return { ref, state, handleClick, handleChange };
};

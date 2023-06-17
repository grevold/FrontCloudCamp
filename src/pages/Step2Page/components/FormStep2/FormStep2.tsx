import { useFormStep2 } from "./useFormStep2";
import { useState } from "react";
import { TrashIcon } from "../../../../icons/TrashIcon";

import s from "./FormStep2.module.css";

interface Props {
  onSubmit: (advantages: string[], checkBox: string, radio: string) => void;
  onClick: () => void;
}

export const FormStep2: React.FC<Props> = ({ onSubmit, onClick }) => {
  const { submit, register, formState } = useFormStep2(onSubmit);
  const { errors } = formState;
  const [state, setState] = useState([1, 2, 3]);

  return (
    <form onSubmit={submit} onClick={onClick} className={s.root}>
      <div className={s.container}>
        <div className={s.advantages}>
          <h1 className={s.header}>Advantages</h1>
          {state.map((input, index) => (
            <div className={s.item}>
              <input
                {...register("advantages")}
                className={s.input}
                placeholder="Placeholder"
                key={index}
              />
              <div className={s.deleteIcon}>
                <button
                  className={s.buttonDelete}
                  onClick={() =>
                    setState((prevState) => [
                      ...prevState.filter(
                        (value, index, array) => index !== array.length - 1
                      ),
                    ])
                  }
                >
                  <TrashIcon />
                </button>
              </div>
            </div>
          ))}
          <button
            className={s.addAdvantages}
            onClick={() => setState((prevState) => [...prevState, 1])}
          >
            +
          </button>
        </div>
        <div className={s.checkBoxes}>
          <h1 className={s.header}>Checkbox group</h1>
          <ul className={s.checkBoxList}>
            <li>
              <input type="checkbox" value="1" className={s.checkBox} />
              <span>1</span>
            </li>
            <li>
              <input type="checkbox" value="2" className={s.checkBox} />
              <span>2</span>
            </li>
            <li>
              <input type="checkbox" value="3" className={s.checkBox} />
              <span>3</span>
            </li>
          </ul>
        </div>
        <div className={s.checkBoxes}>
          <h1 className={s.header}>Radio group</h1>
          <ul className={s.checkBoxList}>
            <li>
              <input type="checkbox" value="1" className={s.checkBoxRadio} />
              <span>1</span>
            </li>
            <li>
              <input type="checkbox" value="2" className={s.checkBoxRadio} />
              <span>2</span>
            </li>
            <li>
              <input type="checkbox" value="3" className={s.checkBoxRadio} />
              <span>3</span>
            </li>
          </ul>
        </div>
      </div>
    </form>
  );
};

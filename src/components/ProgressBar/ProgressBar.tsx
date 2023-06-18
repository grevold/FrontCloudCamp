import { SmallArrow } from "../../icons/SmallArrow";
import s from "./ProgressBar.module.css";

interface Props {
  currentValue: number;
  maxValue: number;
}

export function ProgressBar({ currentValue, maxValue }: Props) {
  const arr = Array.from({ length: maxValue });

  return (
    <div className={s.root}>
      <div className={s.row}>
        {arr.map((_, index) => (
          <div key={index} className={s.item}>
            {index + 1 < currentValue && (
              <div className={s.activePoint}>
                <SmallArrow />
              </div>
            )}
            {index + 1 === currentValue && (
              <div className={s.activePoint}>•</div>
            )}
            {index + 1 > currentValue && <div className={s.point} />}
            <span className={index < currentValue ? s.number_active : s.number}>
              {index + 1}
            </span>
          </div>
        ))}
        <div
          className={s.progressLine}
          style={{ width: `${(100 * (currentValue - 1)) / (maxValue - 1)}%` }}
        />
      </div>
    </div>
  );
}

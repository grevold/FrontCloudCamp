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
            <div className={s.point}></div>
            <span className={s.number}>{index + 1}</span>
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

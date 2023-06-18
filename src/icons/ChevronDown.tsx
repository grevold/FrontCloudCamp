interface Props {
  className?: string;
}

export function ChevronDown({ className }: Props) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.35355 9.05854C4.15829 8.86327 4.15829 8.54669 4.35355 8.35143L5.05683 7.64815C5.25194 7.45304 5.56823 7.45287 5.76355 7.64777L9.64683 11.5226C9.84201 11.7173 10.158 11.7173 10.3532 11.5226L14.2364 7.64777C14.4318 7.45287 14.7481 7.45304 14.9432 7.64815L15.6464 8.35143C15.8417 8.54669 15.8417 8.86327 15.6464 9.05854L10.3536 14.3514C10.1583 14.5467 9.84171 14.5467 9.64645 14.3514L4.35355 9.05854Z"
        fill="black"
        fill-opacity="0.24"
      />
    </svg>
  );
}

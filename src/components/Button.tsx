import { MouseEvent } from "react";
type Props = {
  label: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  selected?: boolean;
};

const Button = ({ label, onClick, selected }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`${
        selected ? "bg-rose-400 text-slate-500" : "border-red-500 text-red-500"
      } hover:bg-rose-300 mx-1 rounded-xl border-2 px-5 py-3 text-base mb-3 font-medium  transition duration-200 `}
      value={label}
    >
      {label}
    </button>
  );
};

export default Button;

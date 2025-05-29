import type { InputHTMLAttributes } from "react";
import { Magnifier } from "../../assets/icons";

function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="c-input">
      <button className="c-input__button">
        <Magnifier />
      </button>
      <input className={`c-input__input ${className}`} {...props} />
    </div>
  );
}

export default Input;

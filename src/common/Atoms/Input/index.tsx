import React from "react";
import * as S from "./style";

type inputType = "text" | "email" | "password";

export interface InputProps {
  disabled?: boolean;
  //   isEntered?: boolean;
  maxLength?: number;
  placeholder?: string;
  type?: inputType;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ disabled = false, maxLength = 20, placeholder, type, value, onChange }) => {
  return (
    <>
      <S.Input
        disabled={disabled}
        placeholder={placeholder}
        type={type}
        maxLength={maxLength}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default Input;

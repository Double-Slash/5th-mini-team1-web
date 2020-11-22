import React from "react";
import * as S from "./style";

export interface ButtonProps {
  children?: React.ReactNode;
  curryingArgs?: string;
  text?: string;
  onClick?: () => void;
  onClickCurrying?: (type: string) => () => void;
}

const Button: React.FC<ButtonProps> = ({ children, text, curryingArgs, onClick, onClickCurrying }) => {
  return (
    <>
      <S.Button
        data-testid={curryingArgs}
        onClick={curryingArgs && onClickCurrying ? onClickCurrying(curryingArgs) : onClick}
      >
        {children}
        {text}
      </S.Button>
    </>
  );
};

export default Button;

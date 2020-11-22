import React from "react";
import * as S from "./style";

export interface HashTagProps {
  text: string;
  onClick: () => void;
}

const HashTag: React.FC<HashTagProps> = ({ text, onClick }) => {
  return (
    <>
      <S.HashTag onClick={onClick}>
        <span>#</span>
        <span>{text}</span>
      </S.HashTag>
    </>
  );
};

export default HashTag;

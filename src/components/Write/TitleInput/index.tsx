import React, { useCallback, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { changeMarkDownTitle } from "@store/Write/action";
import * as S from "./style";

const TitleInput = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const changeTextarea = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (!textareaRef.current) return;
      textareaRef.current.style.height = "1px";
      textareaRef.current.style.height = `${12 + textareaRef.current.scrollHeight}px`;
      setText(e.target.value);
      dispatch(changeMarkDownTitle(e.target.value));
    },
    [dispatch],
  );

  return (
    <>
      <S.Textarea ref={textareaRef} value={text} onChange={changeTextarea} />
    </>
  );
};

export default TitleInput;

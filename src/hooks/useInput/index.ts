import { useCallback, useState } from "react";
import { eventType, ReturnTypes } from "./type";

const useInput = (initialValue: string): ReturnTypes => {
  const [text, setText] = useState(initialValue);
  const changeText = useCallback((e: eventType) => {
    setText(e.target.value);
  }, []);

  return [text, changeText, setText];
};

export default useInput;

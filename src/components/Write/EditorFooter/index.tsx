import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import Button from "@common/Atoms/Button";

const EditorFooter = () => {
  const history = useHistory();
  const onClickGoBack = useCallback(() => {
    history.goBack();
  }, [history]);

  const onClickPreview = useCallback(() => {}, []);

  const onClickSubmit = useCallback(() => {}, []);

  return (
    <>
      <Button text="뒤로가기" onClick={onClickGoBack} />
      <Button text="미리보기" onClick={onClickPreview} />
      <Button text="제출하기" onClick={onClickSubmit} />
    </>
  );
};

export default EditorFooter;

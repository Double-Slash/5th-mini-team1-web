export const CHANGE_MARK_DOWN_TEXT = "write/CHANGE_MARKDOWN_TEXT" as const;
export const CHANGE_MARK_DOWN_TITLE = "write/CHANGE_MARK_DOWN_TITLE" as const;

export const changeMarkDownText = (text: string) => ({
  type: CHANGE_MARK_DOWN_TEXT,
  payload: text,
});

export const changeMarkDownTitle = (text: string) => ({
  type: CHANGE_MARK_DOWN_TITLE,
  payload: text,
});

export type WriteAction = ReturnType<typeof changeMarkDownText> | ReturnType<typeof changeMarkDownTitle>;

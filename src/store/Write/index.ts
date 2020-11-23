import { WriteAction, CHANGE_MARK_DOWN_TEXT, CHANGE_MARK_DOWN_TITLE } from "./action";

interface WriteState {
  title: string;
  markDownText: string;
}

const initialState: WriteState = {
  title: "",
  markDownText: "",
};

const reducer = (state: WriteState = initialState, action: WriteAction) => {
  switch (action.type) {
    case CHANGE_MARK_DOWN_TEXT:
      return { ...state, markDownText: action.payload };
    case CHANGE_MARK_DOWN_TITLE:
      return { ...state, title: action.payload };
    default:
      return state;
  }
};

export default reducer;

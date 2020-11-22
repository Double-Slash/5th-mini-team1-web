import { EditorFromTextArea } from "codemirror";

declare global {
  interface Window {
    codeMirror: EditorFromTextArea | null;
  }
}

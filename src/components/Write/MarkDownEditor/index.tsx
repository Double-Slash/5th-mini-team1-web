import React, { useEffect, useRef } from "react";
import codemirror, { EditorFromTextArea } from "codemirror";

import "./atom-one-light.css";
import "codemirror/addon/display/placeholder";
import "codemirror/lib/codemirror.css";

require("codemirror/mode/markdown/markdown");
require("codemirror/mode/javascript/javascript");
require("codemirror/mode/jsx/jsx");

const MarkDownEditor = () => {
  const codeMirrorRef = useRef<EditorFromTextArea | null>(null);

  useEffect(() => {
    codeMirrorRef.current = codemirror.fromTextArea(document.getElementById("code") as HTMLTextAreaElement, {
      mode: "markdown",
      theme: "one-light",
      placeholder: "placeholder",
      viewportMargin: Infinity,
      lineWrapping: true,
    });
    window.codeMirror = codeMirrorRef.current;
  }, []);

  return (
    <>
      <div>
        <textarea id="code" />
      </div>
    </>
  );
};

export default MarkDownEditor;

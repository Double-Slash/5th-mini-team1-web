import React from "react";

import EditorFooter from "@components/Write/EditorFooter";
import EditorToolbar from "@components/Write/EditorToolbar";
import MarkDownEditor from "@components/Write/MarkDownEditor";

const Write = () => {
  return (
    <>
      <div>
        <EditorToolbar />
        <MarkDownEditor />
        <EditorFooter />
      </div>
    </>
  );
};

export default Write;

import React from "react";

import EditorFooter from "@components/Write/EditorFooter";
import EditorPreview from "@components/Write/EditorPreview";
import EditorToolbar from "@components/Write/EditorToolbar";
import MarkDownEditor from "@components/Write/MarkDownEditor";
import TitleInput from "@components/Write/TitleInput";

const Write = () => {
  return (
    <>
      <div>
        <TitleInput />
        <EditorToolbar />
        <MarkDownEditor />
        <EditorFooter />
        <EditorPreview />
      </div>
    </>
  );
};

export default Write;

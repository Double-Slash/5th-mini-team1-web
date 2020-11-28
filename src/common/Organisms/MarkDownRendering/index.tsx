import React, { useEffect, useState } from "react";
import remark from "remark";
import breaks from "remark-breaks";
import htmlPlugin from "remark-html";
import reactParser from "html-react-parser";

import prismPlugin from "@utils/modules/prism-plugin";
import * as S from "./style";

interface MarkDownRenderingProps {
  markDownText: string;
}

const MarkDownRendering: React.FC<MarkDownRenderingProps> = ({ markDownText }) => {
  const [html, setHtml] = useState("");

  useEffect(() => {
    remark()
      .use(prismPlugin)
      .use(breaks)
      .use(htmlPlugin)
      .process(markDownText, (_, file) => {
        const textResult = String(file);
        setHtml(textResult);
      });
  }, [markDownText]);

  return (
    <>
      <S.MarkdownWrapper className="atom-one-dark">{reactParser(html)}</S.MarkdownWrapper>
    </>
  );
};

export default MarkDownRendering;

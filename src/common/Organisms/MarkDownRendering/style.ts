import styled from "styled-components";
import prismTheme from "@utils/styles/atom-one-dark";

export const MarkdownWrapper = styled.div`
  font-size: 1.125rem;
  color: rgb(34, 36, 38);
  line-height: 1.7;
  letter-spacing: -0.004em;
  word-break: keep-all;
  overflow-wrap: break-word;
  &.atom-one-dark {
    ${prismTheme["atom-one-dark"]}
    pre {
      color: rgb(36, 41, 46);
      background: #313440;
    }
  }
  pre {
    margin: 1rem 0;
    padding: 1.2rem;
    font-size: 1rem;
    border-radius: 4px;
    line-height: 1.5;
    overflow-x: auto;
    letter-spacing: 0px;
  }
  p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  img {
    display: block;
    margin: 3rem auto;
    max-width: 100%;
    height: auto;
  }
`;

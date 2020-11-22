import React, { useCallback } from "react";
import { IconBaseProps } from "react-icons/lib";

import Button from "@common/Atoms/Button";
import * as S from "./style";
import data from "./data";

const EditorToolbar = () => {
  const onClickButton = useCallback(
    (type: string) => () => {
      if (!window.codeMirror) return;
      const { codeMirror } = window;
      const doc = codeMirror.getDoc();
      const cursor = doc.getCursor(); // cursor 위치(line, ch로 return 받음)
      const line = doc.getLine(cursor.line); // 해당 line에 있는 text 값

      // drag 시작, 종료 범위(line, ch로 return 받음)
      const selection = {
        start: doc.getCursor("start"),
        end: doc.getCursor("end"),
      };

      // heading 작성 시 띄어쓰기까지 감지
      const selectWholeLine = () => {
        doc.setSelection(
          {
            line: cursor.line,
            ch: 0,
          },
          {
            line: cursor.line,
            ch: line.length,
          },
        );
      };
      const removeHeading = (text: string) => text.replace(/#{1,6} /, ""); // 기존에 있는 #을 전부 제거
      switch (type) {
        case "h1": {
          selectWholeLine();
          const plain = removeHeading(line);
          doc.replaceSelection(`# ${plain}`);
          break;
        }
        case "h2": {
          selectWholeLine();
          const plain = removeHeading(line);
          doc.replaceSelection(`## ${plain}`);
          break;
        }
        case "h3": {
          selectWholeLine();
          const plain = removeHeading(line);
          doc.replaceSelection(`### ${plain}`);
          break;
        }
        case "bold": {
          const selected = doc.getSelection(); // 드레그 범위에 있는 텍스트 값 가져오기
          if (selected === "텍스트") {
            // **텍스트**에서 텍스트만 drag 되어 있는지 체크
            const isBold = /\*\*(.*)\*\*/.test(
              doc.getRange(
                {
                  line: selection.start.line,
                  ch: selection.start.ch - 2,
                },
                {
                  line: selection.end.line,
                  ch: selection.end.ch + 2,
                },
              ),
            );
            if (isBold) {
              // **텍스트** 전체를 범위로 잡음
              doc.setSelection(
                {
                  line: selection.start.line,
                  ch: selection.start.ch - 2,
                },
                {
                  line: selection.end.line,
                  ch: selection.end.ch + 2,
                },
              );
              // **텍스트**를 텍스트로 바꾸고, 텍스트에다가 drag 적용
              doc.replaceSelection("텍스트");
              doc.setSelection(
                {
                  line: selection.start.line,
                  ch: selection.start.ch - 2,
                },
                {
                  line: selection.end.line,
                  ch: selection.end.ch - 2,
                },
              );
              return;
            }
          }
          // **이 양쪽 끝에 있는 상태에서 drag 되어있는 경우, **을 제거
          if (/\*\*(.*)\*\*/.test(selected)) {
            doc.replaceSelection(selected.replace(/\*\*/g, ""));
            doc.setSelection(
              {
                line: selection.start.line,
                ch: selection.start.ch,
              },
              {
                line: selection.end.line,
                ch: selection.end.ch - 4,
              },
            );
            return;
          }
          // 특정 텍스트를 drag할 경우 양쪽에 **을 추가
          if (selected.length > 0) {
            doc.replaceSelection(`**${selected}**`);
            doc.setSelection(
              {
                line: selection.start.line,
                ch: selection.start.ch,
              },
              {
                line: selection.end.line,
                ch: selection.end.ch + 4,
              },
            );
            return;
          }
          // 위 조건에 아무것도 해당되지 않으면 **텍스트** 출력
          doc.replaceSelection("**텍스트**");
          // drag 범위를 **텍스트**에서 텍스트만 설정해줌
          doc.setSelection(
            {
              line: cursor.line,
              ch: cursor.ch + 2,
            },
            {
              line: cursor.line,
              ch: cursor.ch + 5,
            },
          );
          break;
        }
        case "italic": {
          let selected = doc.getSelection();
          if (selected.length === 0) {
            doc.replaceSelection("_텍스트_");
            doc.setSelection(
              {
                line: cursor.line,
                ch: cursor.ch + 1,
              },
              {
                line: cursor.line,
                ch: cursor.ch + 4,
              },
            );
            return;
          }
          if (selected === "텍스트") {
            const selectLeftAndRight = doc.getRange(
              {
                line: selection.start.line,
                ch: selection.start.ch - 2,
              },
              {
                line: selection.end.line,
                ch: selection.end.ch + 2,
              },
            );
            if (/_(.*)_/.test(selectLeftAndRight)) {
              selected = selectLeftAndRight;
              doc.setSelection(
                {
                  line: selection.start.line,
                  ch: selection.start.ch - 2,
                },
                {
                  line: selection.end.line,
                  ch: selection.end.ch + 2,
                },
              );
              selection.start = {
                line: selection.start.line,
                ch: selection.start.ch - 2,
              };
              selection.end = {
                line: selection.end.line,
                ch: selection.end.ch + 2,
              };
            }
          }
          if (/_(.*)_/.test(selected)) {
            const plain = selected.replace(/^_/, "").replace(/_$/, "");
            doc.replaceSelection(plain);
            doc.setSelection(
              {
                line: selection.start.line,
                ch: selection.start.ch,
              },
              {
                line: selection.end.line,
                ch: selection.end.ch - 2,
              },
            );
            return;
          }
          if (selected.length > 0) {
            doc.replaceSelection(`_${selected}_`);
            doc.setSelection(
              {
                line: selection.start.line,
                ch: selection.start.ch,
              },
              {
                line: selection.end.line,
                ch: selection.end.ch + 2,
              },
            );
          }
          break;
        }
        case "strike": {
          let selected = doc.getSelection();
          if (selected.length === 0) {
            doc.replaceSelection("~~텍스트~~");
            doc.setSelection(
              {
                line: cursor.line,
                ch: cursor.ch + 2,
              },
              {
                line: cursor.line,
                ch: cursor.ch + 5,
              },
            );
            return;
          }
          if (selected === "텍스트") {
            const selectLeftAndRight = doc.getRange(
              {
                line: selection.start.line,
                ch: selection.start.ch - 2,
              },
              {
                line: selection.end.line,
                ch: selection.end.ch + 2,
              },
            );
            if (/~~(.*)~~/.test(selectLeftAndRight)) {
              selected = selectLeftAndRight;
              doc.setSelection(
                {
                  line: selection.start.line,
                  ch: selection.start.ch - 2,
                },
                {
                  line: selection.end.line,
                  ch: selection.end.ch + 2,
                },
              );
              selection.start = {
                line: selection.start.line,
                ch: selection.start.ch - 2,
              };
              selection.end = {
                line: selection.end.line,
                ch: selection.end.ch + 2,
              };
            }
          }
          if (/~~(.*)~~/.test(selected)) {
            const plain = selected.replace(/^~~/, "").replace(/~~$/, "");
            doc.replaceSelection(plain);
            doc.setSelection(
              {
                line: selection.start.line,
                ch: selection.start.ch,
              },
              {
                line: selection.end.line,
                ch: selection.end.ch - 4,
              },
            );
            return;
          }
          if (selected.length > 0) {
            doc.replaceSelection(`~~${selected}~~`);
            doc.setSelection(
              {
                line: selection.start.line,
                ch: selection.start.ch,
              },
              {
                line: selection.end.line,
                ch: selection.end.ch + 4,
              },
            );
          }
          break;
        }
        case "quote": {
          const matches = /^> /.test(line);
          doc.setSelection({ line: cursor.line, ch: 0 }, { line: cursor.line, ch: line.length });
          if (matches) {
            doc.replaceSelection(line.replace(/^> /, ""));
            doc.setCursor({
              line: cursor.line,
              ch: cursor.ch - 2,
            });
          } else {
            doc.replaceSelection(`> ${line}`);
            doc.setCursor({
              line: cursor.line,
              ch: cursor.ch + 2,
            });
          }
          break;
        }
        case "link": {
          // 이 부분은 디자인 분과 상의가 필요함
          break;
        }
        case "blockquote": {
          const selected = doc.getSelection();
          if (selected.length === 0) {
            doc.replaceSelection("```\n코드를 입력하세요\n```");
            doc.setSelection(
              {
                line: cursor.line + 1,
                ch: 0,
              },
              {
                line: cursor.line + 1,
                ch: 9,
              },
            );
            return;
          }
          doc.replaceSelection(`\`\`\`\n${selected}\n\`\`\``);
          break;
        }
        default:
          break;
      }
    },
    [],
  );

  return (
    <>
      <S.List>
        {data.map((button) => {
          return (
            <S.ButtonWrapper key={button.type}>
              <Button curryingArgs={button.type} onClickCurrying={onClickButton}>
                {button.icon(button.icon as IconBaseProps)}
              </Button>
            </S.ButtonWrapper>
          );
        })}
      </S.List>
    </>
  );
};

export default EditorToolbar;

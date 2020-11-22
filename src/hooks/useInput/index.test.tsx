import React from "react";
import { fireEvent, render } from "@testing-library/react";
import useInput from "./index";

describe("hooks/useInput", () => {
  const Input = () => {
    const [text, changeText] = useInput("text");
    return <input value={text} onChange={changeText} placeholder="Input" />;
  };
  const setup = () => {
    const utils = render(<Input />);
    const { getByPlaceholderText } = utils;
    const input = getByPlaceholderText("Input");
    return {
      ...utils,
      input,
    };
  };

  it("인풋 텍스트를 입력한다", () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: "text1" } });
    expect(input).toHaveAttribute("value", "text1");
  });

  it("입력된 텍스트를 지운다", () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: "te" } });
    expect(input).toHaveAttribute("value", "te");
  });
});

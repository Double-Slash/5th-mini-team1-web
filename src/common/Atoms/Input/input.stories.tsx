import React from "react";
import { action } from "@storybook/addon-actions";
import Input from "./index";

export const emptyInput = () => {
  return <Input value="" onChange={action("onChange")} />;
};

export const inputWithText = () => {
  return <Input value="inputWithText" onChange={action("onChange")} />;
};

export const disabledInput = () => {
  return <Input value="" onChange={action("onChange")} disabled />;
};

export default {
  title: "Atoms/Input",
  component: Input,
};

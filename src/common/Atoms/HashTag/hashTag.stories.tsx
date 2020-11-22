import React from "react";
import { action } from "@storybook/addon-actions";
import HashTag from "./index";

export const hashtag = () => {
  return <HashTag text="hashtag" onClick={action("onClick")} />;
};

export default {
  title: "Atoms/HashTag",
  component: HashTag,
};

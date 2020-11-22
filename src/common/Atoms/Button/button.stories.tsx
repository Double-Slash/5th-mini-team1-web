import React from "react";
import { AiFillAccountBook } from "react-icons/ai";
import { action } from "@storybook/addon-actions";
import Button from "./index";

export const butonWithoutIcon = () => {
  return <Button text="butonWithoutIcon" onClick={action("onClick")} />;
};

export const butonWithIcon = () => {
  return (
    <Button text="butonWithIcon" onClick={action("onClick")}>
      <AiFillAccountBook />
    </Button>
  );
};

export const onlyIconButton = () => {
  return (
    <Button onClick={action("onClick")}>
      <AiFillAccountBook />
    </Button>
  );
};

export default {
  title: "Atoms/Button",
  component: Button,
};

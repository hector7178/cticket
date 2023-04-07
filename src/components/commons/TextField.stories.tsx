import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import TextField, { props } from "./TextField";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/solid";
import { useForm ,} from "react-hook-form";
export default {
  title: "Atoms/TextField",
  component: TextField,
} as Meta;

const Template: StoryFn<props> = (args) => {
  const { register } = useForm();
  return (
    <TextField
      {...args}
      {...register("field")}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  className: "",
  color: "primary",
  size: "medium",
  shape: "semibrick",
  weight: "outline",
  placeholder: "Text field",
};

export const ShapeBrick = Template.bind({});
ShapeBrick.args = {
  className: "",
  color: "primary",
  size: "medium",
  shape: "brick",
  weight: "outline",
  placeholder: "Text field",
};
export const ShapeSemiBrick = Template.bind({});
ShapeSemiBrick.args = {
  className: "",
  color: "primary",
  size: "medium",
  shape: "semibrick",
  weight: "outline",
  placeholder: "Text field",
};
export const ShapePill = Template.bind({});
ShapePill.args = {
  className: "",
  color: "primary",
  size: "medium",
  shape: "pill",
  weight: "outline",
  placeholder: "Text field",
};

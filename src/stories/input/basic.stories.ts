import Component from "../../lib/components/inputField";
import { Meta, StoryObj } from "@storybook/react";
// import "../../index.css";

const meta: Meta<typeof Component> = {
  component: Component,
  title: "Input/Basic",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    intent: {
      options: ["primary", "error"],
      control: { type: "radio" },
    },
    onChange: { action: "onChange" },
    inputClasses: {
      control: { disable: true },
      description: "Classes to pass to the input",
    },
    labelClasses: {
      control: { disable: true },
      description: "Classes to pass to the label",
    },
    wrapperClasses: {
      control: { disable: true },
      description: "Classes to pass to the wrapper",
    },
    errorWrapperClasses: {
      control: { disable: true },
      description: "Classes to pass to the error wrapper",
    },
    id: {
      description: "The id of the input",
      defaultValue: "input",
    },
    label: {
      description: "The label of the input",
      defaultValue: "First Name",
    },
    error: {
      description: "An array of strings or a string to display as an error",
    },
  },
};

type Story = StoryObj<typeof meta>;

export const Input: Story = {
  args: {
    id: "input",
    intent: "primary",
    label: "First Name",
  },
};

export const InputError: Story = {
  args: {
    id: "input",
    intent: "error",
    label: "First Name",
    error: ["First name is required", "This is another error"],
  },
};

/**
 * You can pass classes to the wrapper, input and label to override the default styles
 */
export const ClassNames: Story = {
  args: {
    id: "input",
    intent: "primary",
    label: "First Name",
    wrapperClasses: "flex flex-row items-center",
    inputClasses: "bg-red-200",
    labelClasses: "font-bold pr-1",
    errorWrapperClasses: "pl-1 text-yellow-700",
    error: ["This is a warning"],
  },
};

export default meta;

import Component from "../../lib/components/inputField";
import { Meta, StoryObj } from "@storybook/react";
import "../../index.css";

/**
 * This is a wrapper component around Input, Label and Error compound components. If you need more control over the layout strucure have a look at Custom layout.
 *
 */
const meta: Meta<typeof Component> = {
  component: Component,
  title: "Inputfield/Basic",
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    intent: {
      options: ["primary", "error", "warning", "success", "info"],
      control: { type: "radio" },
    },
    onChange: { action: "onChange", control: { disable: true } },
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
    placeholder: {
      description: "The placeholder of the input",
      defaultValue: "Enter your first name",
    },
    size: {
      description: "The size of the input",
      options: ["xs", "sm", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl"],
      control: { type: "radio" },
      defaultValue: "sm",
    },
    boldLabel: {
      description: "Whether to bold the label or not",
      defaultValue: false,
      control: { type: "boolean" },
    },
    labelStyles: {
      description: "Styles to pass to the label",
      control: { type: "object" },
    },
    inputStyles: {
      description: "Styles to pass to the input",
      control: { type: "object" },
    },
    errorStyles: {
      description: "Styles to pass to the error",
      control: { type: "object" },
    },
    styles: {
      description: "Styles to pass to the wrapper",
      control: { type: "object" },
    },
    postfix: {
      description: "The postfix of the input",
      control: { type: "text" },
    },
    postfixWrapperClasses: {
      description: "Classes to pass to the postfix wrapper",
      control: { type: "text" },
    },
    postfixWrapperStyles: {
      description: "Styles to pass to the postfix wrapper",
      control: { type: "object" },
    },
    prefix: {
      description: "The prefix of the input",
      control: { type: "text" },
    },
    prefixWrapperClasses: {
      description: "Classes to pass to the prefix wrapper",
      control: { type: "text" },
    },
    prefixWrapperStyles: {
      description: "Styles to pass to the prefix wrapper",
      control: { type: "object" },
    },
    fullWidth: {
      description: "Whether to make the input full width or not",
      defaultValue: false,
      control: { type: "boolean" },
    },
  },
};

type Story = StoryObj<typeof meta>;

export const Input: Story = {
  args: {
    id: "input",
    intent: "primary",
    label: "First Name",
    size: "sm",
    fullWidth: true,
  },
};

export const InputError: Story = {
  args: {
    id: "input",
    intent: "error",
    label: "First Name",
    error: ["First name is required", "This is another error"],
    inputWrapperClasses: "",
    inputClasses: "",
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
    inputClasses: "bg-yellow-50",
    labelClasses: "font-bold pr-1",
    errorWrapperClasses: "pl-1 text-yellow-700",
    error: ["This is a warning"],
    size: "sm",
    fullWidth: false,
  },
  parameters: {
    layout: "centered",
  },
};

export const PrefixAndPostfix: Story = {
  args: {
    id: "input",
    intent: "primary",
    label: "First Name",
    wrapperClasses: "",
    inputClasses: "pl-14 pr-10",
    prefix: "https://",
    prefixWrapperClasses: "text-gray-500 left-2",
    postfix: ".com",
    postfixWrapperClasses: "text-gray-500",
    size: "sm",
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;

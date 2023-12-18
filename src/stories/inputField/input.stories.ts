import { Input as Component } from "../../lib/components/inputField/input";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Component> = {
  component: Component,
  title: "Inputfield/input element",
  parameters: {
    layout: "centered",
  },
  argTypes: {
    prefix: {
      control: "text",
    },
    prefixWrapperClasses: {
      control: "text",
    },
    postfix: {
      control: "text",
    },
    postfixWrapperClasses: {
      control: "text",
    },
    placeholder: {
      control: "text",
    },
    size: {
      options: ["xs", "sm", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl"],
      control: { type: "radio" },
    },
    onChange: { action: "onChange", control: { disable: true } },
    intent: {
      options: ["primary", "error", "warning", "success", "info"],
      control: { type: "radio" },
    },
    inputClasses: {
      control: { type: "text" },
    },
    inputWrapperClasses: {
      control: { type: "text" },
    },
    inputWrapperStyles: {
      control: { type: "object" },
    },
    inputStyles: {
      control: { type: "object" },
    },
  },
};

export type Story = StoryObj<typeof meta>;

export const Input: Story = {
  args: {
    inputWrapperClasses: "w-96",
    inputClasses: "w-full",
    size: "lg",
  },
};

export const Prefix: Story = {
  args: {
    prefix: "https://",
    prefixWrapperClasses: "text-gray-500 left-2",
    postfix: ".com",
    postfixWrapperClasses: "text-gray-500",
    inputClasses: "w-full pl-16 pr-12",
    inputWrapperClasses: "w-96",
    size: "lg",
  },
};

export default meta;

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

export default meta;

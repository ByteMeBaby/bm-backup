import Component from "../../lib/components/inputField";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Component> = {
  component: Component,
  title: "Input/Simple",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
};

type Story = StoryObj<typeof meta>;

export const Input: Story = {
  args: {
    id: "input",
  },
};

export default meta;

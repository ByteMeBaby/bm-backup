import { CustomLayout } from "./customLayout";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CustomLayout> = {
  component: CustomLayout,
  title: "Input/Custom layout",
  parameters: {
    layout: "centered",
  },

  argTypes: {
    label: {
      control: "text",
    },
    type: {
      control: "text",
    },
    error: {
      control: "text",
    },
    onChange: { action: "onChange" },
  },
};

type Story = StoryObj<typeof meta>;

export const Input: Story = {
  args: {
    label: "Label",
    id: "input",
    type: "text",
  },
};

export default meta;

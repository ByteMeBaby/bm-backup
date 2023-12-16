import { CompoundedInput } from "./compoundComponent";
import { Meta, StoryObj } from "@storybook/react";

/**
 * If you want to customize the structure of the Inputfield instead of using Input component directly, You could do that with InputField component
 */
const meta: Meta<typeof CompoundedInput> = {
  component: CompoundedInput,
  title: "Input/Compound Component",
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

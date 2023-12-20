import { Meta, StoryObj } from "@storybook/react";
import { Button as Component } from "../../lib/components/button";
import "../../index.css";

const meta: Meta<typeof Component> = {
  component: Component,
  title: "Button/Basic",
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
    intent: {
      control: {
        type: "select",
        options: [
          "primary",
          "secondary",
          "danger",
          "warning",
          "success",
          "info",
          "light",
          "dark",
        ],
      },
      description: "Visual intent",
    },
    rounded: {
      control: {
        type: "select",
        options: ["none", "sm", "md", "lg", "xl", "2xl", "full"],
      },
      description: "Rounded corners",
    },
    size: {
      control: {
        type: "select",
        options: ["xs", "sm", "lg", "xl", "2xl"],
      },
      description: "Button size",
    },
    disabled: {
      control: {
        type: "boolean",
      },
      description: "Disabled state",
    },
    loading: {
      control: {
        type: "boolean",
      },
      description: "Loading state",
    },
    bold: {
      control: {
        type: "boolean",
      },
      description: "Bold text",
    },
    reverseItems: {
      control: {
        type: "boolean",
      },
      description: "Reverse items",
    },
  },
};

export const Basic: StoryObj<typeof meta> = {
  args: {
    children: "Click me",
    intent: "primary",
    size: "sm",
    rounded: "sm",
  },
};

export default meta;

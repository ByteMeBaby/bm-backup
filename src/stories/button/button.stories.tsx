import { Meta, StoryObj } from "@storybook/react";
import Button from "../../lib/components/button";
import "../../index.css";
import React from "react";

const meta: Meta<typeof Button> = {
  component: Button,
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
    onClick: {
      action: "clicked",
      control: {
        disable: true,
      },
    },
    borderStyle: {
      control: {
        type: "select",
        options: ["none", "dashed", "dotted", "solid", "double"],
      },
      description: "Dashed border",
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

/**
 * You can use reverseItems prop to reverse the order of the icon and text.
 */
export const LoadingIconAndPlacement: StoryObj<typeof meta> = {
  args: {
    children: "Loading...",
    intent: "primary",
    size: "sm",
    rounded: "sm",
    loading: true,
    reverseItems: true,
    loadingIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        data-slot="icon"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
        />
      </svg>
    ),
  },
};

export const BorderStyle: StoryObj<typeof meta> = {
  args: {
    children: "Click me",
    intent: "primary",
    size: "sm",
    rounded: "sm",
    borderStyle: "double",
  },
};

export default meta;

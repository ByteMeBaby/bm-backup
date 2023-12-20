import React from "react";
import { Card as Component } from "../../lib/components/card";
import { Meta, StoryObj } from "@storybook/react";
import "../../index.css";
import { Button } from "../../lib/components/button";

const meta: Meta<typeof Component> = {
  component: Component,
  title: "Card/Basic",
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
    title: {
      control: {
        type: "text",
      },
      description: "Card title",
    },
    actions: {
      control: {
        disable: true,
      },
      description: "Card actions. These will be rendered in the footer",
    },
    actionAlignment: {
      control: {
        type: "select",
        options: ["left", "right", "evenly", "between"],
      },
      description:
        "If you want to align actions in a single container then use this prop. To use this you have to pass `false` to multiContainerActions prop",
    },
    actionWrapperClasses: {
      control: {
        type: "text",
      },
      description: "Actions ",
    },
    multiContainerActions: {
      control: {
        type: "boolean",
      },
      description:
        "If you want to align actions in multiple containers, separate from each other using the borders and align them in the middle of each container then use this prop",
    },
  },
};

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    title: "This is title",
    children: (
      <div className="p-3 text-gray-600 text-sm">
        To actionAlignment to work you have to pass false to
        multiContainerActions prop.
      </div>
    ),
    actions: [
      ...Array(3)
        .fill(null)
        .map((_, i) => <Button key={"button_" + i}>Button</Button>),
    ],
  },
};

/**
 * You can use compound components to create a custom layout.
 * For more info please have a look at custom layout documentation at  <a href="?path=/story/card-basic--custom-layout">Custom Layout</a>
 */
export const CustomLayout: Story = {
  args: {
    children: (
      <div className=" min-w-full">
        <Component.Heading el="h1">Title here</Component.Heading>
        <Component.Body el="div">This is card body</Component.Body>
      </div>
    ),
  },
};

export default meta;

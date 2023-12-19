import React from "react";
import { Card as Component } from "../../lib/components/card";
import { Meta, StoryObj } from "@storybook/react";
import "../../index.css";

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
  },
};

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    title: "This is title",
    children: <div className="p-3">This is card body</div>,
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

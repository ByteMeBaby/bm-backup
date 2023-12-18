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

export const Card: Story = {
  args: {
    children: (
      <div className=" min-w-full">
        <h1 className="text-2xl font-bold mb-2">Card</h1>
        <div className="text-gray-600">This is a card</div>
      </div>
    ),
  },
};

export default meta;

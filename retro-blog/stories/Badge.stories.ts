import { Meta, StoryObj } from "@storybook/nextjs";
import Badge from "../app/components/Badge";

const meta = {
  title: "Components/Badge",
  component: Badge,
  args: {
    variant: "primary",
    children: "Badge",
    font: "base",
    size: "lg",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    status: {
      control: "radio",
      options: ["active", "lock", "close"],
    },
    font: {
      control: "radio",
      options: ["base", "bold"],
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof Badge>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const Active: Story = {
  args: {
    status: "active",
  },
};
export const Lock: Story = {
  args: {
    status: "lock",
  },
};

export const FontBold: Story = {
  args: {
    font: "bold",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
  },
};

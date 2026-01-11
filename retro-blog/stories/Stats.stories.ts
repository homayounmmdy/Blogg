import Stat from "@/app/components/Stats";
import { Meta, StoryObj } from "@storybook/nextjs";

const meta = {
  title: "Components/Stat",
  component: Stat,
  args: {
    size: "md",
  },
  argTypes: {
    variant: {
      control: "select",
      options: [
        "neonTeal",
        "amberCrt",
        "violetHolo",
        "matrixGreen",
        "alertRed",
        "cyberBlue",
      ],
      description: "Retro-futurism visual style",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Size scale",
    },
    label: { control: "text" },
    value: { control: "text" },
  },
} satisfies Meta<typeof Stat>;

export default meta;

type Story = StoryObj<typeof Stat>;

export const NeonTeal: Story = {
  args: {
    label: "VIEWS",
    value: "2,049,124",
    variant: "neonTeal",
  },
};

export const AmberCrt: Story = {
  args: {
    label: "LIKES",
    value: "42K",
    variant: "amberCrt",
  },
};

export const SmallSize: Story = {
  args: {
    label: "SHARES",
    value: "1.2K",
    variant: "neonTeal",
    size: "sm",
  },
};

export const LargeSize: Story = {
  args: {
    label: "COMPLETION",
    value: "92%",
    variant: "neonTeal",
    size: "lg",
  },
};

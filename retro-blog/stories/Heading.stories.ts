import Heading from "@/app/components/Heading";
import { Meta, StoryObj } from "@storybook/nextjs";

const meta = {
  title: "Components/Heading",
  component: Heading,
  args: {
    children : "Heading",
    as : 'h2',
    size : 'md',
    textAlign: 'center'
  }
} satisfies Meta;
export default meta;

type Story = StoryObj<typeof Heading>;

export const Default: Story = {};

export const SM_Size : Story = {
    args: {
        size : 'sm'
    }
}
export const XL_Size : Story = {
    args: {
        size : 'xl'
    }
}

export const Text_left : Story = {
      args: {
        textAlign : 'left'
    }
}
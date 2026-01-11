import SinglePostPage from "@/app/(pages)/post/[id]/page";
import { Meta, StoryObj } from "@storybook/nextjs";

const meta = {
  title: "Pages/Single Post Page",
  component: SinglePostPage,
} satisfies Meta;
export default meta;

type Story = StoryObj<typeof SinglePostPage>;

export const Desktop: Story = {
  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
  },
};
export const Tablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
};

export const Mobile: Story = {
  parameters: {
    viewport: {
      Mobile: true,
    },
  },
};

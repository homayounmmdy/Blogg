import ExplorePage from "@/app/(pages)/explore/page";
import { Meta, StoryObj } from "@storybook/nextjs";

const meta = {
  title: "Pages/Explore Page",
  component: ExplorePage,
} satisfies Meta;
export default meta;

type Story = StoryObj<typeof ExplorePage>;

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
      Mobile: true
    },
  },
};

import HomePage from "@/app/page";
import { Meta, StoryObj } from "@storybook/nextjs";

const meta = {
  title: "Pages/Home Page",
  component: HomePage,
} satisfies Meta;
export default meta;

type Story = StoryObj<typeof HomePage>;

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

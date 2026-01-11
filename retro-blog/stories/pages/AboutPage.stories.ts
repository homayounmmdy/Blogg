import AboutPage from "@/app/(pages)/about/page";
import { Meta, StoryObj } from "@storybook/nextjs";

const meta = {
  title: "Pages/About Page",
  component: AboutPage,
} satisfies Meta;
export default meta;

type Story = StoryObj<typeof AboutPage>;

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

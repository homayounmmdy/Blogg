import ContactPage from "@/app/(pages)/contact/page";
import { Meta, StoryObj } from "@storybook/nextjs";

const meta = {
  title: "Pages/Contact Page",
  component: ContactPage,
} satisfies Meta;
export default meta;

type Story = StoryObj<typeof ContactPage>;

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

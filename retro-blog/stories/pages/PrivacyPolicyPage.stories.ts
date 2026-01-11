import PrivacyPolicyPage from "@/app/(pages)/privacy-policy/page";
import { Meta, StoryObj } from "@storybook/nextjs";

const meta = {
  title: "Pages/Privacy Policy Page",
  component: PrivacyPolicyPage,
} satisfies Meta;
export default meta;

type Story = StoryObj<typeof PrivacyPolicyPage>;

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

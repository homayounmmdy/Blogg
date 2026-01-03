import SectionHeader from "@/app/components/SectionHeader";
import { Meta, StoryObj } from "@storybook/nextjs";

const meta = {
  title: "SectionHeader",
  component: SectionHeader,
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof SectionHeader>;

export const Default: Story = {
  args: {
    title: "Posts",
  },
};

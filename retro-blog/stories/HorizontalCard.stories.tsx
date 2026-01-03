import HorizontalCard from "@/app/components/HorizontalCard";
import StaticData from "@/app/config/StaticData";
import { Meta, StoryObj } from "@storybook/nextjs";

const meta = {
  title: "Posts/HorizontalCard",
  component: HorizontalCard,
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof HorizontalCard>;

const sampleItem = StaticData.others[0];

export const Default: Story = {
  args: {
    post: sampleItem,
  },
};

import Comment from "@/app/components/Comment";
import StaticData from "@/app/config/StaticData";
import { Meta, StoryObj } from "@storybook/nextjs";

const meta = {
  title: "Comment",
  component: Comment,
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof Comment>;

const sampleItem = StaticData.comments[0];

export const Default: Story = {
  args: {
    comment: sampleItem,
  },
};

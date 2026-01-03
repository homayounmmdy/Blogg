import LinearPost from "@/app/components/LinearPost";
import StaticData from "@/app/config/StaticData";
import { Meta, StoryObj } from "@storybook/nextjs";
const meta = {
  title: "Posts/LinearPost",
  component: LinearPost,
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof LinearPost>;

const sampleItem = StaticData.others[0];
const postWithNoCategory = StaticData.others[9];

export const Default: Story = {
  args: {
    post: sampleItem,
  },
};

export const PostWithoutCategory: Story = {
  args: {
    post: postWithNoCategory,
  },
};

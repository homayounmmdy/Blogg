import Comment from "@/app/components/Comment";
import StaticData from "@/app/config/StaticData";
import { Meta, StoryObj } from "@storybook/nextjs";

const meta = {
  title: "Components/Comment",
  component: Comment,
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof Comment>;

const sampleComment = StaticData.comments[0];
const adminComment = StaticData.comments[3];
const moderatorComment = StaticData.comments[4];

export const Default: Story = {
  args: {
    comment: sampleComment,
    depth: 2,
  },
  argTypes: {
    depth: {
      control: "radio",
      options: [0,1,2]
    },
  },
};

export const CommentWithReply: Story = {
  args: {
    comment: sampleComment,
    depth: 1,
  },
};

export const MultiplyReply: Story = {
  args: {
    comment: sampleComment,
  },
};

export const AdminComment : Story = {
  args: {
    comment: adminComment,
  },
}
export const ModeratorComment : Story = {
  args: {
    comment: moderatorComment,
  },
}

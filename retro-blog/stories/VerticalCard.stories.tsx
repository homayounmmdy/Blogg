import VerticalCard from "@/app/components/VerticalCard";
import StaticData from "@/app/config/StaticData";
import { Meta, StoryObj } from "@storybook/nextjs";

const meta = {
  title: "Posts/VerticalCard",
  component: VerticalCard,
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof VerticalCard>;

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

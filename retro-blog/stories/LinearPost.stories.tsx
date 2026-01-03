import LinearPost from "@/app/components/LinearPost";
import StaticData from "@/app/config/StaticData";
import { Decorator, Meta, StoryObj } from "@storybook/nextjs";

const withBackground: Decorator = (Story) => (
  <div className="bg-gray-950 p-6">
    <Story />
  </div>
);

const meta = {
  title: "Posts/LinearPost",
  component: LinearPost,
  decorators: [withBackground],
  parameters: {
    backgrounds: {
      disable: true,
    },
  },
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

export const PostWithoutCategory : Story = {
  args: {
    post: postWithNoCategory,
  },
}
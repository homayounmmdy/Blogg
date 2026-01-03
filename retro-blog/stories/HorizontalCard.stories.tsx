import HorizontalCard from "@/app/components/HorizontalCard";
import StaticData from "@/app/config/StaticData";
import { Decorator, Meta, StoryObj } from "@storybook/nextjs";

const withBackground: Decorator = (Story) => (
  <div className="bg-gray-950 p-6">
    <Story />
  </div>
);

const meta = {
  title: "Posts/HorizontalCard",
  component: HorizontalCard,
  decorators: [withBackground],
  parameters: {
    backgrounds: {
      disable: true,
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof HorizontalCard>;

const sampleItem = StaticData.others[0];

export const Default: Story = {
  args: {
    post: sampleItem,
  },
};

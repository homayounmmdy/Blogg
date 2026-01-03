import HorizontalCard from "@/app/components/HorizontalCard";
import StaticData from "@/app/config/StaticData";
import { Decorator, Meta, StoryObj } from "@storybook/nextjs";

const withBackground: Decorator = (Story) => (
  <div className="bg-gray-950 p-6 md:p-16">
    <Story />
  </div>
);

const meta = {
  title: "Cards/HorizontalCard",
  component: HorizontalCard,
  decorators: [withBackground],
  parameters: {
    backgrounds: {
      // Optional: disable default Storybook backgrounds panel override
      disable: true,
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof HorizontalCard>;

const sampleItem = StaticData.others[0];

export const Default: Story = {
  args: {
    item: sampleItem,
  },
};

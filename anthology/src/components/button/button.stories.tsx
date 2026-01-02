import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta = {
  title: 'Button',
  component: Button,
  args : {
    children : 'Button'
  }
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    style: { backgroundColor: 'blue' },
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary',
  },
};

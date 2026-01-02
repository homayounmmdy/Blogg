import type { Meta, StoryObj } from '@storybook/react';
import { Callout } from './callout';

const meta = {
  title: 'Components/Callout',
  component: Callout,
  args: {
    children: 'This is a message that you should read.',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'information', 'success', 'danger', 'warning'],
    },
  },
} satisfies Meta;

export default meta;
export type Story = StoryObj<typeof Callout>;

export const Primary: Story = {
  args: {
    title: 'Primary',
    variant: 'primary',
  },
};

export const Information: Story = {
  args: {
    title: 'information',
    variant: 'information',
  },
};

export const Success: Story = {
  args: {
    title: 'success',
    variant: 'success',
  },
};

export const Warning: Story = {
  args: {
    title: 'warning',
    variant: 'warning',
  },
};

export const Danger: Story = {
  args: {
    title: 'danger',
    variant: 'danger',
  },
};

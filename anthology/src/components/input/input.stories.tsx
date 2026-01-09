import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './input';

const meta = {
  title: 'Components/Input',
  component: Input,
  args: {
    label: 'Input',
    placeholder: 'Enter text',
    disabled: false,
    required: false,
  },
  argTypes: {
    label: {
      name: 'Label',
      control: 'text',
      description: 'Label of the input',
    },
    placeholder: {
      name: 'Placeholder',
      control: 'text',
      description: 'Placeholder text of the input',
    },
    disabled: {
      name: 'Disabled',
      control: 'boolean',
      description: 'Disables the input',
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    required: {
      name: 'Required',
      control: 'boolean',
      description: 'Marks the input as required',
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {},
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: '',
  },
};

export const WithDetail: Story = {
  args: {
    details: 'Lorem ipsum dolor sit',
  },
};

export const WithoutLabel: Story = {
  args: {
    unlabeled: true,
  },
};

export const Dark: Story = {
  parameters: {
    themes: {
      themeOverride: 'dark',
    },
  },
};


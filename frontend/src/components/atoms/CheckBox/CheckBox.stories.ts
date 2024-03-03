import type { Meta, StoryObj } from '@storybook/react';
import { CheckBox } from './CheckBox.atom';

const meta = {
  title: 'CheckBox',
  component: CheckBox,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CheckBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sample: Story = {
  args: {},
};

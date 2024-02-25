import type { Meta, StoryObj } from '@storybook/react';
import { Group } from './Group.organism';

const meta = {
  title: 'Group/Group',
  component: Group,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Group>;

export default meta;
type Story = StoryObj<typeof meta>;

const UserList = [
  {
    name: 'Hiroki Tetuka',
    selected: true,
  },
  {
    name: 'Kenta Noda',
    selected: true,
  },
  {
    name: 'Tomoya Negishi',
    selected: false,
  },
  {
    name: 'Yamada Tarou',
    selected: true,
  },
];

const OtherUserList = [
  {
    name: 'Hiroki Tetuka',
    selected: true,
  },
  {
    name: 'Kenta Noda',
    selected: true,
  },
  {
    name: 'Tomoya Negishi',
    selected: false,
  },
  {
    name: 'Yamada Tarou',
    selected: true,
  },
  {
    name: 'Tanaka Hanako',
    selected: true,
  },
  {
    name: 'Suzuki Jirou',
    selected: true,
  },
  {
    name: 'Yamamoto Taro',
    selected: true,
  },
  {
    name: 'Sato Hanako',
    selected: true,
  },
];

export const Default: Story = {
  args: { groupName: 'tuyotuyo-engineer', initUserList: UserList },
};

export const ManyUser: Story = {
  args: { groupName: 'エンジニアの集い', initUserList: OtherUserList },
};

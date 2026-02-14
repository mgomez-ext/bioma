import type { Meta, StoryObj } from '@storybook/angular';
import { IconFontComponent } from './icon-font.component';

const meta: Meta<IconFontComponent> = {
  title: 'Bioma 2.1/Components/Icons',
  component: IconFontComponent,
  tags: ['autodocs'],
  argTypes: {
    iconName: {
      control: 'text',
    },
    size: {
      control: 'select',
      options: ['16', '20', '24', '32', '40', '48'],
    },
    type: {
      control: 'select',
      options: ['rounded', 'filled'],
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'inverse', 'subtle', 'inherit'],
    },
  },
};

export default meta;

type Story = StoryObj<IconFontComponent>;

export const Default: Story = {
  args: {
    iconName: 'home',
    size: '24',
    type: 'rounded',
    color: 'default',
  },
};

export const Rounded: Story = {
  args: {
    iconName: 'add',
    size: '24',
    type: 'rounded',
    color: 'default',
  },
};

export const Filled: Story = {
  args: {
    iconName: 'add',
    size: '24',
    type: 'filled',
    color: 'default',
  },
};

export const Size16: Story = {
  args: { iconName: 'home', size: '16', type: 'rounded' },
};

export const Size24: Story = {
  args: { iconName: 'home', size: '24', type: 'rounded' },
};

export const Size48: Story = {
  args: { iconName: 'home', size: '48', type: 'rounded' },
};

export const Primary: Story = {
  args: { iconName: 'add', size: '24', type: 'rounded', color: 'primary' },
};

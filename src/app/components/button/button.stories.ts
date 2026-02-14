import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Bioma 2.1/Components/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'outlined', 'flat', 'link'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    label: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<ButtonComponent>;

export const Default: Story = {
  args: {
    label: 'Button',
    variant: 'filled',
    size: 'large',
  },
};

export const Filled: Story = {
  args: {
    label: 'Filled Button',
    variant: 'filled',
    size: 'large',
  },
};

export const Outlined: Story = {
  args: {
    label: 'Outlined Button',
    variant: 'outlined',
    size: 'large',
  },
};

export const Flat: Story = {
  args: {
    label: 'Flat Button',
    variant: 'flat',
    size: 'large',
  },
};

export const Link: Story = {
  args: {
    label: 'Link Button',
    variant: 'link',
    size: 'large',
  },
};

export const Small: Story = {
  args: {
    label: 'Small',
    variant: 'filled',
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    label: 'Medium',
    variant: 'filled',
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    label: 'Large',
    variant: 'filled',
    size: 'large',
  },
};

export const WithIconStart: Story = {
  args: {
    label: 'Agregar',
    variant: 'filled',
    size: 'large',
    iconStart: true,
    iconStartName: 'add',
  },
};

export const WithIconEnd: Story = {
  args: {
    label: 'Siguiente',
    variant: 'filled',
    size: 'large',
    iconEnd: true,
    iconEndName: 'arrow_forward',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    variant: 'filled',
    size: 'large',
    disabled: true,
  },
};

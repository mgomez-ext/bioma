import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { IconFontComponent } from './icon-font.component';
import { CommonModule } from '@angular/common';

const meta: Meta<IconFontComponent> = {
  title: 'Bioma 2.0/Components/IconFont',
  component: IconFontComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, IconFontComponent],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    iconName: {
      control: 'text',
      description: 'Nombre del icono de Material Symbols (ej: home, add, search)',
    },
    size: {
      control: 'select',
      options: ['16', '20', '24', '32', '40', '48'],
      description: 'Tamaño del icono en pixels',
    },
    type: {
      control: 'select',
      options: ['rounded', 'filled'],
      description: 'Estilo del icono: rounded (outline) o filled (solid)',
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'inverse', 'subtle'],
      description: 'Color del icono usando tokens semánticos',
    },
  },
};

export default meta;
type Story = StoryObj<IconFontComponent>;

// Default Story
export const Default: Story = {
  args: {
    iconName: 'home',
    size: '24',
    type: 'rounded',
    color: 'default',
  },
};

// Tipos
export const Rounded: Story = {
  args: {
    iconName: 'favorite',
    size: '24',
    type: 'rounded',
    color: 'default',
  },
};

export const Filled: Story = {
  args: {
    iconName: 'favorite',
    size: '24',
    type: 'filled',
    color: 'default',
  },
};

// Tamaños
export const Size16: Story = {
  args: {
    iconName: 'star',
    size: '16',
    type: 'rounded',
  },
};

export const Size20: Story = {
  args: {
    iconName: 'star',
    size: '20',
    type: 'rounded',
  },
};

export const Size24: Story = {
  args: {
    iconName: 'star',
    size: '24',
    type: 'rounded',
  },
};

export const Size32: Story = {
  args: {
    iconName: 'star',
    size: '32',
    type: 'rounded',
  },
};

export const Size40: Story = {
  args: {
    iconName: 'star',
    size: '40',
    type: 'rounded',
  },
};

export const Size48: Story = {
  args: {
    iconName: 'star',
    size: '48',
    type: 'rounded',
  },
};

// Colores
export const ColorDefault: Story = {
  args: {
    iconName: 'palette',
    size: '32',
    type: 'rounded',
    color: 'default',
  },
};

export const ColorPrimary: Story = {
  args: {
    iconName: 'palette',
    size: '32',
    type: 'rounded',
    color: 'primary',
  },
};

export const ColorSubtle: Story = {
  args: {
    iconName: 'palette',
    size: '32',
    type: 'rounded',
    color: 'subtle',
  },
};

export const ColorInverse: Story = {
  render: () => ({
    template: `
      <div style="background-color: var(--neutral-950); padding: 24px; border-radius: 8px;">
        <bio-icon-font iconName="light_mode" size="32" type="rounded" color="inverse"></bio-icon-font>
      </div>
    `,
  }),
};

// Iconos Comunes
export const CommonIcons: Story = {
  render: () => ({
    template: `
      <div style="display: grid; grid-template-columns: repeat(6, 1fr); gap: 24px; padding: 24px;">
        <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
          <bio-icon-font iconName="home" size="24" type="rounded"></bio-icon-font>
          <span style="font-size: 12px; color: var(--text-secondary);">home</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
          <bio-icon-font iconName="search" size="24" type="rounded"></bio-icon-font>
          <span style="font-size: 12px; color: var(--text-secondary);">search</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
          <bio-icon-font iconName="settings" size="24" type="rounded"></bio-icon-font>
          <span style="font-size: 12px; color: var(--text-secondary);">settings</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
          <bio-icon-font iconName="account_circle" size="24" type="rounded"></bio-icon-font>
          <span style="font-size: 12px; color: var(--text-secondary);">account_circle</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
          <bio-icon-font iconName="notifications" size="24" type="rounded"></bio-icon-font>
          <span style="font-size: 12px; color: var(--text-secondary);">notifications</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
          <bio-icon-font iconName="mail" size="24" type="rounded"></bio-icon-font>
          <span style="font-size: 12px; color: var(--text-secondary);">mail</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
          <bio-icon-font iconName="favorite" size="24" type="rounded"></bio-icon-font>
          <span style="font-size: 12px; color: var(--text-secondary);">favorite</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
          <bio-icon-font iconName="star" size="24" type="rounded"></bio-icon-font>
          <span style="font-size: 12px; color: var(--text-secondary);">star</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
          <bio-icon-font iconName="delete" size="24" type="rounded"></bio-icon-font>
          <span style="font-size: 12px; color: var(--text-secondary);">delete</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
          <bio-icon-font iconName="edit" size="24" type="rounded"></bio-icon-font>
          <span style="font-size: 12px; color: var(--text-secondary);">edit</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
          <bio-icon-font iconName="add" size="24" type="rounded"></bio-icon-font>
          <span style="font-size: 12px; color: var(--text-secondary);">add</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
          <bio-icon-font iconName="close" size="24" type="rounded"></bio-icon-font>
          <span style="font-size: 12px; color: var(--text-secondary);">close</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
          <bio-icon-font iconName="check" size="24" type="rounded"></bio-icon-font>
          <span style="font-size: 12px; color: var(--text-secondary);">check</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
          <bio-icon-font iconName="arrow_forward" size="24" type="rounded"></bio-icon-font>
          <span style="font-size: 12px; color: var(--text-secondary);">arrow_forward</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
          <bio-icon-font iconName="arrow_back" size="24" type="rounded"></bio-icon-font>
          <span style="font-size: 12px; color: var(--text-secondary);">arrow_back</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
          <bio-icon-font iconName="menu" size="24" type="rounded"></bio-icon-font>
          <span style="font-size: 12px; color: var(--text-secondary);">menu</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
          <bio-icon-font iconName="more_vert" size="24" type="rounded"></bio-icon-font>
          <span style="font-size: 12px; color: var(--text-secondary);">more_vert</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
          <bio-icon-font iconName="download" size="24" type="rounded"></bio-icon-font>
          <span style="font-size: 12px; color: var(--text-secondary);">download</span>
        </div>
      </div>
    `,
  }),
};

// Matriz completa - Todos los tamaños
export const AllSizes: Story = {
  render: () => ({
    template: `
      <div style="padding: 24px;">
        <h3 style="margin-bottom: 24px; font-family: Sora, sans-serif;">Rounded Type - All Sizes</h3>
        <div style="display: flex; align-items: flex-end; gap: 24px; margin-bottom: 48px;">
          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
            <bio-icon-font iconName="star" size="16" type="rounded"></bio-icon-font>
            <span style="font-size: 12px; color: var(--text-secondary);">16px</span>
          </div>
          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
            <bio-icon-font iconName="star" size="20" type="rounded"></bio-icon-font>
            <span style="font-size: 12px; color: var(--text-secondary);">20px</span>
          </div>
          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
            <bio-icon-font iconName="star" size="24" type="rounded"></bio-icon-font>
            <span style="font-size: 12px; color: var(--text-secondary);">24px</span>
          </div>
          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
            <bio-icon-font iconName="star" size="32" type="rounded"></bio-icon-font>
            <span style="font-size: 12px; color: var(--text-secondary);">32px</span>
          </div>
          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
            <bio-icon-font iconName="star" size="40" type="rounded"></bio-icon-font>
            <span style="font-size: 12px; color: var(--text-secondary);">40px</span>
          </div>
          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
            <bio-icon-font iconName="star" size="48" type="rounded"></bio-icon-font>
            <span style="font-size: 12px; color: var(--text-secondary);">48px</span>
          </div>
        </div>

        <h3 style="margin-bottom: 24px; font-family: Sora, sans-serif;">Filled Type - All Sizes</h3>
        <div style="display: flex; align-items: flex-end; gap: 24px;">
          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
            <bio-icon-font iconName="star" size="16" type="filled"></bio-icon-font>
            <span style="font-size: 12px; color: var(--text-secondary);">16px</span>
          </div>
          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
            <bio-icon-font iconName="star" size="20" type="filled"></bio-icon-font>
            <span style="font-size: 12px; color: var(--text-secondary);">20px</span>
          </div>
          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
            <bio-icon-font iconName="star" size="24" type="filled"></bio-icon-font>
            <span style="font-size: 12px; color: var(--text-secondary);">24px</span>
          </div>
          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
            <bio-icon-font iconName="star" size="32" type="filled"></bio-icon-font>
            <span style="font-size: 12px; color: var(--text-secondary);">32px</span>
          </div>
          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
            <bio-icon-font iconName="star" size="40" type="filled"></bio-icon-font>
            <span style="font-size: 12px; color: var(--text-secondary);">40px</span>
          </div>
          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
            <bio-icon-font iconName="star" size="48" type="filled"></bio-icon-font>
            <span style="font-size: 12px; color: var(--text-secondary);">48px</span>
          </div>
        </div>
      </div>
    `,
  }),
};

// Comparación Rounded vs Filled
export const RoundedVsFilled: Story = {
  render: () => ({
    template: `
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 48px; padding: 24px;">
        <div>
          <h3 style="margin-bottom: 16px; font-family: Sora, sans-serif;">Rounded (Outline)</h3>
          <div style="display: flex; flex-direction: column; gap: 16px;">
            <bio-icon-font iconName="favorite" size="32" type="rounded"></bio-icon-font>
            <bio-icon-font iconName="star" size="32" type="rounded"></bio-icon-font>
            <bio-icon-font iconName="notifications" size="32" type="rounded"></bio-icon-font>
            <bio-icon-font iconName="bookmark" size="32" type="rounded"></bio-icon-font>
          </div>
        </div>
        <div>
          <h3 style="margin-bottom: 16px; font-family: Sora, sans-serif;">Filled (Solid)</h3>
          <div style="display: flex; flex-direction: column; gap: 16px;">
            <bio-icon-font iconName="favorite" size="32" type="filled"></bio-icon-font>
            <bio-icon-font iconName="star" size="32" type="filled"></bio-icon-font>
            <bio-icon-font iconName="notifications" size="32" type="filled"></bio-icon-font>
            <bio-icon-font iconName="bookmark" size="32" type="filled"></bio-icon-font>
          </div>
        </div>
      </div>
    `,
  }),
};

// Playground interactivo
export const Playground: Story = {
  args: {
    iconName: 'home',
    size: '24',
    type: 'rounded',
    color: 'default',
  },
};

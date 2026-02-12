import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { ButtonComponent } from './button.component';
import { CommonModule } from '@angular/common';

const meta: Meta<ButtonComponent> = {
  title: 'Bioma 2.0/Components/Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, ButtonComponent],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Texto del botón',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Tamaño del botón',
    },
    variant: {
      control: 'select',
      options: ['filled', 'outlined', 'flat', 'link'],
      description: 'Variante visual del botón',
    },
    iconStart: {
      control: 'boolean',
      description: 'Muestra ícono al inicio',
    },
    iconEnd: {
      control: 'boolean',
      description: 'Muestra ícono al final',
    },
    disabled: {
      control: 'boolean',
      description: 'Deshabilita el botón',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Botón de ancho completo',
    },
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

// Default Story
export const Default: Story = {
  args: {
    label: 'Button',
    size: 'large',
    variant: 'filled',
    iconStart: false,
    iconEnd: false,
    disabled: false,
    fullWidth: false,
  },
};

// Variantes
export const Filled: Story = {
  args: {
    label: 'Primary Action',
    variant: 'filled',
    size: 'large',
  },
};

export const Outlined: Story = {
  args: {
    label: 'Secondary Action',
    variant: 'outlined',
    size: 'large',
  },
};

export const Flat: Story = {
  args: {
    label: 'Tertiary Action',
    variant: 'flat',
    size: 'large',
  },
};

export const Link: Story = {
  args: {
    label: 'Link Action',
    variant: 'link',
    size: 'large',
  },
};

// Tamaños
export const Large: Story = {
  args: {
    label: 'Large Button',
    size: 'large',
    variant: 'filled',
  },
};

export const Medium: Story = {
  args: {
    label: 'Medium Button',
    size: 'medium',
    variant: 'filled',
  },
};

export const Small: Story = {
  args: {
    label: 'Small Button',
    size: 'small',
    variant: 'filled',
  },
};

// Con íconos
export const WithIconStart: Story = {
  args: {
    label: "add",
    iconStart: true,
    iconStartName: "hom",
    size: 'large',
    variant: "flat",
    iconEnd: false,
    disabled: false
  },
};

export const WithIconEnd: Story = {
  args: {
    label: 'Open Menu',
    iconEnd: true,
    iconEndName: 'keyboard_arrow_down',
    size: 'large',
    variant: 'filled',
  },
};

export const WithBothIcons: Story = {
  args: {
    label: 'Action',
    iconStart: true,
    iconEnd: true,
    iconStartName: 'star',
    iconEndName: 'arrow_forward',
    size: 'large',
    variant: 'filled',
  },
};

// Estados
export const Disabled: Story = {
  args: {
    label: 'Disabled Button',
    disabled: true,
    size: 'large',
    variant: 'filled',
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Full Width Button',
    fullWidth: true,
    size: 'large',
    variant: 'filled',
  },
};

// Matriz de variantes (todas las combinaciones)
export const AllVariants: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 32px; padding: 24px;">
        <!-- Filled Variants -->
        <div>
          <h3 style="margin-bottom: 16px; font-family: Sora, sans-serif;">Filled Buttons</h3>
          <div style="display: flex; gap: 16px; align-items: center;">
            <bio-button label="Large" variant="filled" size="large"></bio-button>
            <bio-button label="Medium" variant="filled" size="medium"></bio-button>
            <bio-button label="Small" variant="filled" size="small"></bio-button>
            <bio-button label="Disabled" variant="filled" size="large" [disabled]="true"></bio-button>
          </div>
        </div>

        <!-- Outlined Variants -->
        <div>
          <h3 style="margin-bottom: 16px; font-family: Sora, sans-serif;">Outlined Buttons</h3>
          <div style="display: flex; gap: 16px; align-items: center;">
            <bio-button label="Large" variant="outlined" size="large"></bio-button>
            <bio-button label="Medium" variant="outlined" size="medium"></bio-button>
            <bio-button label="Small" variant="outlined" size="small"></bio-button>
            <bio-button label="Disabled" variant="outlined" size="large" [disabled]="true"></bio-button>
          </div>
        </div>

        <!-- Flat Variants -->
        <div>
          <h3 style="margin-bottom: 16px; font-family: Sora, sans-serif;">Flat Buttons</h3>
          <div style="display: flex; gap: 16px; align-items: center;">
            <bio-button label="Large" variant="flat" size="large"></bio-button>
            <bio-button label="Medium" variant="flat" size="medium"></bio-button>
            <bio-button label="Small" variant="flat" size="small"></bio-button>
            <bio-button label="Disabled" variant="flat" size="large" [disabled]="true"></bio-button>
          </div>
        </div>

        <!-- Link Variants -->
        <div>
          <h3 style="margin-bottom: 16px; font-family: Sora, sans-serif;">Link Buttons</h3>
          <div style="display: flex; gap: 16px; align-items: center;">
            <bio-button label="Large" variant="link" size="large"></bio-button>
            <bio-button label="Medium" variant="link" size="medium"></bio-button>
            <bio-button label="Small" variant="link" size="small"></bio-button>
            <bio-button label="Disabled" variant="link" size="large" [disabled]="true"></bio-button>
          </div>
        </div>

        <!-- With Icons -->
        <div>
          <h3 style="margin-bottom: 16px; font-family: Sora, sans-serif;">Buttons with Icons</h3>
          <div style="display: flex; gap: 16px; align-items: center;">
            <bio-button label="Add Item" variant="filled" size="large" [iconStart]="true" iconStartName="add"></bio-button>
            <bio-button label="Open Menu" variant="outlined" size="large" [iconEnd]="true" iconEndName="keyboard_arrow_down"></bio-button>
            <bio-button label="Download" variant="flat" size="medium" [iconStart]="true" iconStartName="download"></bio-button>
            <bio-button label="Learn More" variant="link" size="medium" [iconEnd]="true" iconEndName="arrow_forward"></bio-button>
          </div>
        </div>
      </div>
    `,
  }),
};

// Playground interactivo
export const Playground: Story = {
  args: {
    label: 'Customize Me',
    size: 'large',
    variant: 'filled',
    iconStart: false,
    iconEnd: false,
    iconStartName: 'star',
    iconEndName: 'arrow_forward',
    disabled: false,
    fullWidth: false,
  },
};

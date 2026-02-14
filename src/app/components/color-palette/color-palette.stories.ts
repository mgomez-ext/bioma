import { Meta, StoryObj } from '@storybook/angular';
import { ColorPaletteComponent, ColorPalette } from './color-palette.component';

const meta: Meta<ColorPaletteComponent> = {
  title: 'Bioma 2.0/Foundations/Color/Color Palettes',
  component: ColorPaletteComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
El componente **Color Palette** muestra paletas de colores de forma visual e interactiva.

### Características
- **Interactivo**: Click en cualquier color para ver detalles completos
- **Copiable**: Copia valores HEX, RGB, HSL con un click
- **Responsive**: Se adapta a diferentes tamaños de pantalla
- **3 Layouts**: Horizontal, vertical y grid
- **Accesible**: Contraste automático para texto sobre colores

### Uso
\`\`\`typescript
<app-color-palette
  [palette]="brandPalette"
  prefix="brand-"
  layout="horizontal"
  [showDetails]="true"
  [copyable]="true">
</app-color-palette>
\`\`\`
        `,
      },
    },
    layout: 'padded',
  },
  argTypes: {
    layout: {
      control: 'select',
      options: ['horizontal', 'vertical', 'grid'],
      description: 'Layout de la paleta',
    },
    showDetails: {
      control: 'boolean',
      description: 'Mostrar detalles al hacer click',
    },
    copyable: {
      control: 'boolean',
      description: 'Permitir copiar valores',
    },
    prefix: {
      control: 'text',
      description: 'Prefijo para nombres de tokens',
    },
  },
};

export default meta;
type Story = StoryObj<ColorPaletteComponent>;

// Brand Palette - Bioma Red
const brandPalette: ColorPalette = {
  name: 'Brand Palette',
  description: 'Paleta de color primaria de Bioma - Rojo característico de la marca',
  type: 'sequential',
  tokens: [
    {
      name: '50',
      value: '--brand-50',
      hex: '#FFEDED',
      rgb: 'rgb(255, 237, 237)',
      hsl: 'hsl(0, 100%, 97%)',
      usage: 'Fondos muy sutiles, backgrounds de alertas',
      contrast: 'dark',
    },
    {
      name: '100',
      value: '--brand-100',
      hex: '#FFD1D4',
      rgb: 'rgb(255, 209, 212)',
      hsl: 'hsl(356, 100%, 91%)',
      usage: 'Fondos sutiles, estados hover ligeros',
      contrast: 'dark',
    },
    {
      name: '200',
      value: '--brand-200',
      hex: '#FFA3AB',
      rgb: 'rgb(255, 163, 171)',
      hsl: 'hsl(355, 100%, 82%)',
      usage: 'Backgrounds medios, badges',
      contrast: 'dark',
    },
    {
      name: '300',
      value: '--brand-300',
      hex: '#FF4D61',
      rgb: 'rgb(255, 77, 97)',
      hsl: 'hsl(353, 100%, 65%)',
      usage: 'Texto sobre fondos claros',
      contrast: 'dark',
    },
    {
      name: '400',
      value: '--brand-400',
      hex: '#F52B4A',
      rgb: 'rgb(245, 43, 74)',
      hsl: 'hsl(351, 91%, 56%)',
      usage: 'Estados hover en modo light',
      contrast: 'light',
    },
    {
      name: '500',
      value: '--brand-500',
      hex: '#E30038',
      rgb: 'rgb(227, 0, 56)',
      hsl: 'hsl(345, 100%, 45%)',
      usage: '⭐ Color principal de marca - Bioma Red',
      contrast: 'light',
    },
    {
      name: '600',
      value: '--brand-600',
      hex: '#C40030',
      rgb: 'rgb(196, 0, 48)',
      hsl: 'hsl(345, 100%, 38%)',
      usage: 'Estados pressed en modo light',
      contrast: 'light',
    },
    {
      name: '700',
      value: '--brand-700',
      hex: '#BA1F38',
      rgb: 'rgb(186, 31, 56)',
      hsl: 'hsl(350, 71%, 43%)',
      usage: 'Versión oscura, contraste fuerte',
      contrast: 'light',
    },
    {
      name: '800',
      value: '--brand-800',
      hex: '#9C0024',
      rgb: 'rgb(156, 0, 36)',
      hsl: 'hsl(346, 100%, 31%)',
      usage: 'Versión muy oscura',
      contrast: 'light',
    },
    {
      name: '900',
      value: '--brand-900',
      hex: '#700017',
      rgb: 'rgb(112, 0, 23)',
      hsl: 'hsl(348, 100%, 22%)',
      usage: 'Backgrounds en dark mode',
      contrast: 'light',
    },
    {
      name: '950',
      value: '--brand-950',
      hex: '#45000A',
      rgb: 'rgb(69, 0, 10)',
      hsl: 'hsl(351, 100%, 14%)',
      usage: 'Contraste máximo en dark mode',
      contrast: 'light',
    },
  ],
};

// Neutral Palette
const neutralPalette: ColorPalette = {
  name: 'Neutral Palette',
  description: 'Paleta de grises para texto, fondos y bordes',
  type: 'sequential',
  tokens: [
    {
      name: 'white',
      value: '--neutral-white',
      hex: '#FFFFFF',
      rgb: 'rgb(255, 255, 255)',
      hsl: 'hsl(0, 0%, 100%)',
      usage: 'Blanco puro - fondos principales',
      contrast: 'dark',
    },
    {
      name: '50',
      value: '--neutral-50',
      hex: '#FAFAFA',
      rgb: 'rgb(250, 250, 250)',
      hsl: 'hsl(0, 0%, 98%)',
      usage: 'Fondos muy claros, surfaces secundarias',
      contrast: 'dark',
    },
    {
      name: '100',
      value: '--neutral-100',
      hex: '#F5F5F2',
      rgb: 'rgb(245, 245, 242)',
      hsl: 'hsl(60, 14%, 95%)',
      usage: 'Fondos claros, hover states',
      contrast: 'dark',
    },
    {
      name: '200',
      value: '--neutral-200',
      hex: '#E3E3E3',
      rgb: 'rgb(227, 227, 227)',
      hsl: 'hsl(0, 0%, 89%)',
      usage: 'Bordes sutiles, dividers',
      contrast: 'dark',
    },
    {
      name: '300',
      value: '--neutral-300',
      hex: '#C2C2BF',
      rgb: 'rgb(194, 194, 191)',
      hsl: 'hsl(60, 3%, 75%)',
      usage: 'Bordes por defecto',
      contrast: 'dark',
    },
    {
      name: '400',
      value: '--neutral-400',
      hex: '#969696',
      rgb: 'rgb(150, 150, 150)',
      hsl: 'hsl(0, 0%, 59%)',
      usage: 'Bordes fuertes, texto deshabilitado',
      contrast: 'dark',
    },
    {
      name: '500',
      value: '--neutral-500',
      hex: '#737373',
      rgb: 'rgb(115, 115, 115)',
      hsl: 'hsl(0, 0%, 45%)',
      usage: 'Texto atenuado, placeholders',
      contrast: 'light',
    },
    {
      name: '600',
      value: '--neutral-600',
      hex: '#575454',
      rgb: 'rgb(87, 84, 84)',
      hsl: 'hsl(0, 2%, 34%)',
      usage: 'Texto terciario',
      contrast: 'light',
    },
    {
      name: '700',
      value: '--neutral-700',
      hex: '#404040',
      rgb: 'rgb(64, 64, 64)',
      hsl: 'hsl(0, 0%, 25%)',
      usage: 'Texto secundario',
      contrast: 'light',
    },
    {
      name: '800',
      value: '--neutral-800',
      hex: '#30302E',
      rgb: 'rgb(48, 48, 46)',
      hsl: 'hsl(60, 2%, 18%)',
      usage: 'Texto primario (cuerpo)',
      contrast: 'light',
    },
    {
      name: '900',
      value: '--neutral-900',
      hex: '#262626',
      rgb: 'rgb(38, 38, 38)',
      hsl: 'hsl(0, 0%, 15%)',
      usage: 'Texto muy oscuro',
      contrast: 'light',
    },
    {
      name: '950',
      value: '--neutral-950',
      hex: '#121212',
      rgb: 'rgb(18, 18, 18)',
      hsl: 'hsl(0, 0%, 7%)',
      usage: 'Texto más oscuro, fondos dark mode',
      contrast: 'light',
    },
    {
      name: 'black',
      value: '--neutral-black',
      hex: '#000000',
      rgb: 'rgb(0, 0, 0)',
      hsl: 'hsl(0, 0%, 0%)',
      usage: 'Negro puro - uso excepcional',
      contrast: 'light',
    },
  ],
};

// Status Colors - Success
const successPalette: ColorPalette = {
  name: 'Success Colors',
  description: 'Paleta para estados de éxito y confirmación',
  type: 'semantic',
  tokens: [
    {
      name: 'subtle',
      value: '--success-subtle',
      hex: '#D1FAE5',
      rgb: 'rgb(209, 250, 229)',
      hsl: 'hsl(149, 80%, 90%)',
      usage: 'Fondos de alertas de éxito',
      contrast: 'dark',
    },
    {
      name: 'default',
      value: '--success-default',
      hex: '#10B981',
      rgb: 'rgb(16, 185, 129)',
      hsl: 'hsl(160, 84%, 39%)',
      usage: 'Color principal de éxito',
      contrast: 'light',
    },
    {
      name: 'hover',
      value: '--success-hover',
      hex: '#059669',
      rgb: 'rgb(5, 150, 105)',
      hsl: 'hsl(160, 93%, 30%)',
      usage: 'Estado hover',
      contrast: 'light',
    },
    {
      name: 'strong',
      value: '--success-strong',
      hex: '#065F46',
      rgb: 'rgb(6, 95, 70)',
      hsl: 'hsl(163, 88%, 20%)',
      usage: 'Texto sobre fondos sutiles',
      contrast: 'light',
    },
  ],
};

// Status Colors - Warning
const warningPalette: ColorPalette = {
  name: 'Warning Colors',
  description: 'Paleta para advertencias y precauciones',
  type: 'semantic',
  tokens: [
    {
      name: 'subtle',
      value: '--warning-subtle',
      hex: '#FEF3C7',
      rgb: 'rgb(254, 243, 199)',
      hsl: 'hsl(48, 96%, 89%)',
      usage: 'Fondos de alertas de advertencia',
      contrast: 'dark',
    },
    {
      name: 'default',
      value: '--warning-default',
      hex: '#F59E0B',
      rgb: 'rgb(245, 158, 11)',
      hsl: 'hsl(38, 92%, 50%)',
      usage: 'Color principal de advertencia',
      contrast: 'dark',
    },
    {
      name: 'hover',
      value: '--warning-hover',
      hex: '#D97706',
      rgb: 'rgb(217, 119, 6)',
      hsl: 'hsl(32, 95%, 44%)',
      usage: 'Estado hover',
      contrast: 'light',
    },
    {
      name: 'strong',
      value: '--warning-strong',
      hex: '#92400E',
      rgb: 'rgb(146, 64, 14)',
      hsl: 'hsl(23, 83%, 31%)',
      usage: 'Texto sobre fondos sutiles',
      contrast: 'light',
    },
  ],
};

// Status Colors - Error
const errorPalette: ColorPalette = {
  name: 'Error Colors',
  description: 'Paleta para errores y estados destructivos',
  type: 'semantic',
  tokens: [
    {
      name: 'subtle',
      value: '--error-subtle',
      hex: '#FEE2E2',
      rgb: 'rgb(254, 226, 226)',
      hsl: 'hsl(0, 93%, 94%)',
      usage: 'Fondos de alertas de error',
      contrast: 'dark',
    },
    {
      name: 'default',
      value: '--error-default',
      hex: '#EF4444',
      rgb: 'rgb(239, 68, 68)',
      hsl: 'hsl(0, 84%, 60%)',
      usage: 'Color principal de error',
      contrast: 'light',
    },
    {
      name: 'hover',
      value: '--error-hover',
      hex: '#DC2626',
      rgb: 'rgb(220, 38, 38)',
      hsl: 'hsl(0, 73%, 51%)',
      usage: 'Estado hover',
      contrast: 'light',
    },
    {
      name: 'strong',
      value: '--error-strong',
      hex: '#991B1B',
      rgb: 'rgb(153, 27, 27)',
      hsl: 'hsl(0, 70%, 35%)',
      usage: 'Texto sobre fondos sutiles',
      contrast: 'light',
    },
  ],
};

// Status Colors - Info
const infoPalette: ColorPalette = {
  name: 'Info Colors',
  description: 'Paleta para información y estados neutrales',
  type: 'semantic',
  tokens: [
    {
      name: 'subtle',
      value: '--info-subtle',
      hex: '#DBEAFE',
      rgb: 'rgb(219, 234, 254)',
      hsl: 'hsl(214, 95%, 93%)',
      usage: 'Fondos de alertas informativas',
      contrast: 'dark',
    },
    {
      name: 'default',
      value: '--info-default',
      hex: '#3B82F6',
      rgb: 'rgb(59, 130, 246)',
      hsl: 'hsl(221, 91%, 60%)',
      usage: 'Color principal de información',
      contrast: 'light',
    },
    {
      name: 'hover',
      value: '--info-hover',
      hex: '#2563EB',
      rgb: 'rgb(37, 99, 235)',
      hsl: 'hsl(225, 83%, 53%)',
      usage: 'Estado hover',
      contrast: 'light',
    },
    {
      name: 'strong',
      value: '--info-strong',
      hex: '#1E40AF',
      rgb: 'rgb(30, 64, 175)',
      hsl: 'hsl(226, 71%, 40%)',
      usage: 'Texto sobre fondos sutiles',
      contrast: 'light',
    },
  ],
};

// Stories
export const BrandHorizontal: Story = {
  args: {
    palette: brandPalette,
    prefix: 'brand-',
    layout: 'horizontal',
    showDetails: true,
    copyable: true,
  },
};

export const NeutralHorizontal: Story = {
  args: {
    palette: neutralPalette,
    prefix: 'neutral-',
    layout: 'horizontal',
    showDetails: true,
    copyable: true,
  },
};

export const SuccessGrid: Story = {
  args: {
    palette: successPalette,
    prefix: 'success-',
    layout: 'grid',
    showDetails: true,
    copyable: true,
  },
};

export const WarningGrid: Story = {
  args: {
    palette: warningPalette,
    prefix: 'warning-',
    layout: 'grid',
    showDetails: true,
    copyable: true,
  },
};

export const ErrorGrid: Story = {
  args: {
    palette: errorPalette,
    prefix: 'error-',
    layout: 'grid',
    showDetails: true,
    copyable: true,
  },
};

export const InfoGrid: Story = {
  args: {
    palette: infoPalette,
    prefix: 'info-',
    layout: 'grid',
    showDetails: true,
    copyable: true,
  },
};

export const VerticalLayout: Story = {
  args: {
    palette: {
      name: 'Primary Actions',
      description: 'Estados de botones primarios',
      type: 'semantic',
      tokens: [
        {
          name: 'default',
          value: '--primary-default',
          hex: '#E30038',
          rgb: 'rgb(227, 0, 56)',
          usage: 'Estado normal',
          contrast: 'light',
        },
        {
          name: 'hover',
          value: '--primary-hover',
          hex: '#C40030',
          rgb: 'rgb(196, 0, 48)',
          usage: 'Estado hover',
          contrast: 'light',
        },
        {
          name: 'active',
          value: '--primary-active',
          hex: '#BA1F38',
          rgb: 'rgb(186, 31, 56)',
          usage: 'Estado pressed',
          contrast: 'light',
        },
        {
          name: 'disabled',
          value: '--primary-disabled',
          hex: '#C2C2BF',
          rgb: 'rgb(194, 194, 191)',
          usage: 'Estado deshabilitado',
          contrast: 'dark',
        },
      ],
    },
    prefix: 'primary-',
    layout: 'vertical',
    showDetails: true,
    copyable: true,
  },
};

// Playground Story
export const Playground: Story = {
  args: {
    palette: brandPalette,
    prefix: 'brand-',
    layout: 'horizontal',
    showDetails: true,
    copyable: true,
  },
};

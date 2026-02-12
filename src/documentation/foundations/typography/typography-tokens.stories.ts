import { Meta, StoryObj } from '@storybook/angular';
import { TokenTableComponent } from '../../../app/components/token-table/token-table.component';
import { Token } from '../../../app/components/token-doc/token-doc.component';

const meta: Meta<TokenTableComponent> = {
  title: 'Bioma 2.0/Foundations/Typography',
  component: TokenTableComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Sistema tipográfico de Bioma. Familias de fuentes, tamaños, pesos, alturas de línea y espaciado de letras.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<TokenTableComponent>;

// Font Family Tokens
const fontFamilyTokens: Token[] = [
  { name: 'primary', value: 'Sora, -apple-system, BlinkMacSystemFont, sans-serif', usage: 'Fuente principal del sistema', type: 'typography' },
  { name: 'mono', value: 'SF Mono, Monaco, Cascadia Code, monospace', usage: 'Fuente monoespaciada para código', type: 'typography' },
];

// Font Size Tokens
const fontSizeTokens: Token[] = [
  { name: 'xs', value: '12px', usage: 'Texto muy pequeño (captions, labels)', type: 'typography' },
  { name: 'sm', value: '14px', usage: 'Texto pequeño (secondary text)', type: 'typography' },
  { name: 'base', value: '16px', usage: 'Texto base (body text)', type: 'typography' },
  { name: 'lg', value: '18px', usage: 'Texto grande (destacado)', type: 'typography' },
  { name: 'xl', value: '20px', usage: 'Subtítulos pequeños', type: 'typography' },
  { name: '2xl', value: '24px', usage: 'Subtítulos medianos (H4)', type: 'typography' },
  { name: '3xl', value: '30px', usage: 'Títulos medianos (H3)', type: 'typography' },
  { name: '4xl', value: '36px', usage: 'Títulos grandes (H2)', type: 'typography' },
  { name: '5xl', value: '48px', usage: 'Títulos principales (H1)', type: 'typography' },
];

// Font Weight Tokens
const fontWeightTokens: Token[] = [
  { name: 'light', value: '300', usage: 'Peso ligero (uso limitado)', type: 'typography' },
  { name: 'regular', value: '400', usage: 'Peso normal (body text)', type: 'typography' },
  { name: 'medium', value: '500', usage: 'Peso medio (énfasis sutil)', type: 'typography' },
  { name: 'semibold', value: '600', usage: 'Peso semi-bold (subtítulos)', type: 'typography' },
  { name: 'bold', value: '700', usage: 'Peso bold (títulos)', type: 'typography' },
];

// Line Height Tokens
const lineHeightTokens: Token[] = [
  { name: 'none', value: '1', usage: 'Sin espacio adicional', type: 'typography' },
  { name: 'tight', value: '1.25', usage: 'Ajustado (títulos grandes)', type: 'typography' },
  { name: 'snug', value: '1.375', usage: 'Compacto (títulos)', type: 'typography' },
  { name: 'normal', value: '1.5', usage: 'Normal (body text)', type: 'typography' },
  { name: 'relaxed', value: '1.625', usage: 'Relajado (lectura cómoda)', type: 'typography' },
  { name: 'loose', value: '2', usage: 'Amplio (espaciado extra)', type: 'typography' },
];

// Letter Spacing Tokens
const letterSpacingTokens: Token[] = [
  { name: 'tight', value: '-0.025em', usage: 'Compacto (títulos grandes)', type: 'typography' },
  { name: 'normal', value: '0em', usage: 'Normal (por defecto)', type: 'typography' },
  { name: 'wide', value: '0.025em', usage: 'Amplio (uppercase text)', type: 'typography' },
];

export const FontFamilies: Story = {
  args: {
    tokens: fontFamilyTokens,
    title: '🔤 Familias de Fuentes',
    prefix: 'font/',
    showSampleColumn: false,
  },
};

export const FontSizes: Story = {
  args: {
    tokens: fontSizeTokens,
    title: '📏 Tamaños de Fuente',
    prefix: 'font/',
    showSampleColumn: false,
  },
};

export const FontWeights: Story = {
  args: {
    tokens: fontWeightTokens,
    title: '💪 Pesos de Fuente',
    prefix: 'font/',
    showSampleColumn: false,
  },
};

export const LineHeights: Story = {
  args: {
    tokens: lineHeightTokens,
    title: '📐 Alturas de Línea',
    prefix: 'leading/',
    showSampleColumn: false,
  },
};

export const LetterSpacing: Story = {
  args: {
    tokens: letterSpacingTokens,
    title: '📊 Espaciado de Letras',
    prefix: 'tracking/',
    showSampleColumn: false,
  },
};

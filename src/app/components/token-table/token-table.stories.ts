import { Meta, StoryObj } from '@storybook/angular';
import { TokenTableComponent } from './token-table.component';
import { Token } from '../token-doc/token-doc.component';

const meta: Meta<TokenTableComponent> = {
  title: '_Internal/TokenTable',
  component: TokenTableComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<TokenTableComponent>;

// Neutral Palette Tokens
const neutralTokens: Token[] = [
  { name: 'neutral/50', value: '#FAFAFA', hex: '#FAFAFA', rgb: 'rgb(250, 250, 250)', usage: 'Fondos muy claros', type: 'color' },
  { name: 'neutral/100', value: '#F5F5F2', hex: '#F5F5F2', rgb: 'rgb(245, 245, 242)', usage: 'Fondos claros', type: 'color' },
  { name: 'neutral/200', value: '#E3E3E3', hex: '#E3E3E3', rgb: 'rgb(227, 227, 227)', usage: 'Bordes sutiles', type: 'color' },
  { name: 'neutral/300', value: '#C2C2BF', hex: '#C2C2BF', rgb: 'rgb(194, 194, 191)', usage: 'Bordes medios', type: 'color' },
  { name: 'neutral/400', value: '#969696', hex: '#969696', rgb: 'rgb(150, 150, 150)', usage: 'Texto deshabilitado', type: 'color' },
  { name: 'neutral/500', value: '#737373', hex: '#737373', rgb: 'rgb(115, 115, 115)', usage: 'Texto secundario', type: 'color' },
  { name: 'neutral/600', value: '#575454', hex: '#575454', rgb: 'rgb(87, 84, 84)', usage: 'Texto secundario fuerte', type: 'color' },
  { name: 'neutral/700', value: '#404040', hex: '#404040', rgb: 'rgb(64, 64, 64)', usage: 'Texto primario', type: 'color' },
  { name: 'neutral/800', value: '#30302E', hex: '#30302E', rgb: 'rgb(48, 48, 46)', usage: 'Texto fuerte', type: 'color' },
  { name: 'neutral/900', value: '#262626', hex: '#262626', rgb: 'rgb(38, 38, 38)', usage: 'Texto muy fuerte', type: 'color' },
  { name: 'neutral/950', value: '#121212', hex: '#121212', rgb: 'rgb(18, 18, 18)', usage: 'Fondos dark mode', type: 'color' },
  { name: 'neutral/white', value: '#FFFFFF', hex: '#FFFFFF', rgb: 'rgb(255, 255, 255)', usage: 'Blanco puro', type: 'color' },
  { name: 'neutral/black', value: '#000000', hex: '#000000', rgb: 'rgb(0, 0, 0)', usage: 'Negro puro', type: 'color' },
];

// Brand Palette Tokens
const brandTokens: Token[] = [
  { name: 'brand/50', value: '#FFEDED', hex: '#FFEDED', rgb: 'rgb(255, 237, 237)', usage: 'Fondo muy sutil', type: 'color' },
  { name: 'brand/100', value: '#FFD1D4', hex: '#FFD1D4', rgb: 'rgb(255, 209, 212)', usage: 'Fondo sutil', type: 'color' },
  { name: 'brand/200', value: '#FFA3AB', hex: '#FFA3AB', rgb: 'rgb(255, 163, 171)', usage: 'Fondo medio', type: 'color' },
  { name: 'brand/300', value: '#FF4D61', hex: '#FF4D61', rgb: 'rgb(255, 77, 97)', usage: 'Texto sobre claro', type: 'color' },
  { name: 'brand/400', value: '#F52B4A', hex: '#F52B4A', rgb: 'rgb(245, 43, 74)', usage: 'Hover light', type: 'color' },
  { name: 'brand/500', value: '#E30038', hex: '#E30038', rgb: 'rgb(227, 0, 56)', usage: '⭐ Principal', type: 'color' },
  { name: 'brand/600', value: '#C40030', hex: '#C40030', rgb: 'rgb(196, 0, 48)', usage: 'Pressed light', type: 'color' },
  { name: 'brand/700', value: '#BA1F38', hex: '#BA1F38', rgb: 'rgb(186, 31, 56)', usage: 'Strong', type: 'color' },
  { name: 'brand/800', value: '#9C0024', hex: '#9C0024', rgb: 'rgb(156, 0, 36)', usage: 'Very strong', type: 'color' },
  { name: 'brand/900', value: '#700017', hex: '#700017', rgb: 'rgb(112, 0, 23)', usage: 'Dark mode bg', type: 'color' },
  { name: 'brand/950', value: '#45000A', hex: '#45000A', rgb: 'rgb(69, 0, 10)', usage: 'Dark mode strong', type: 'color' },
];

// Semantic Text Tokens
const semanticTextTokens: Token[] = [
  { name: 'text/strong', value: '{gray/950}', lightMode: '{gray/950}', darkMode: '{neutral/white}', usage: 'Títulos principales', type: 'semantic' },
  { name: 'text/primary', value: '{gray/800}', lightMode: '{gray/800}', darkMode: '{gray/50}', usage: 'Texto de cuerpo', type: 'semantic' },
  { name: 'text/secondary', value: '{gray/700}', lightMode: '{gray/700}', darkMode: '{gray/300}', usage: 'Texto secundario', type: 'semantic' },
  { name: 'text/tertiary', value: '{gray/600}', lightMode: '{gray/600}', darkMode: '{gray/400}', usage: 'Texto terciario', type: 'semantic' },
  { name: 'text/muted', value: '{gray/500}', lightMode: '{gray/500}', darkMode: '{gray/500}', usage: 'Texto atenuado', type: 'semantic' },
  { name: 'text/disabled', value: '{gray/300}', lightMode: '{gray/300}', darkMode: '{gray/600}', usage: 'Texto deshabilitado', type: 'semantic' },
  { name: 'text/inverse', value: '{neutral/white}', lightMode: '{neutral/white}', darkMode: '{gray/950}', usage: 'Sobre fondos oscuros', type: 'semantic' },
  { name: 'text/link', value: '{cerulean/600}', lightMode: '{cerulean/600}', darkMode: '{cerulean/300}', usage: 'Enlaces', type: 'semantic' },
];

// Spacing Tokens
const spacingTokens: Token[] = [
  { name: 'spacing-0', value: '0px', usage: 'Sin espacio', type: 'spacing' },
  { name: 'spacing-1', value: '4px', usage: 'Espaciado mínimo', type: 'spacing' },
  { name: 'spacing-2', value: '8px', usage: 'Espaciado XS', type: 'spacing' },
  { name: 'spacing-3', value: '12px', usage: 'Espaciado SM', type: 'spacing' },
  { name: 'spacing-4', value: '16px', usage: 'Espaciado MD (base)', type: 'spacing' },
  { name: 'spacing-5', value: '20px', usage: 'Entre base y LG', type: 'spacing' },
  { name: 'spacing-6', value: '24px', usage: 'Espaciado LG', type: 'spacing' },
  { name: 'spacing-8', value: '32px', usage: 'Espaciado XL', type: 'spacing' },
  { name: 'spacing-10', value: '40px', usage: 'Espaciado 2XL', type: 'spacing' },
  { name: 'spacing-12', value: '48px', usage: 'Espaciado 3XL', type: 'spacing' },
  { name: 'spacing-16', value: '64px', usage: 'Espaciado 4XL', type: 'spacing' },
];

export const NeutralPalette: Story = {
  args: {
    tokens: neutralTokens,
    title: 'Paleta Neutral',
    prefix: '',
    showSampleColumn: true,
  },
};

export const BrandPalette: Story = {
  args: {
    tokens: brandTokens,
    title: 'Paleta Brand (Rojo Bioma)',
    prefix: '',
    showSampleColumn: true,
  },
};

export const SemanticTextTokens: Story = {
  args: {
    tokens: semanticTextTokens,
    title: 'Tokens Semánticos - Text',
    prefix: '',
    showSampleColumn: false,
  },
};

export const SpacingScale: Story = {
  args: {
    tokens: spacingTokens,
    title: 'Escala de Espaciado',
    prefix: '',
    showSampleColumn: false,
  },
};

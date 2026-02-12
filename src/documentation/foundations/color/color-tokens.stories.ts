import { Meta, StoryObj } from '@storybook/angular';
import { TokenTableComponent } from '../../../app/components/token-table/token-table.component';
import { Token } from '../../../app/components/token-doc/token-doc.component';

const meta: Meta<TokenTableComponent> = {
  title: 'Bioma 2.0/Foundations/Color',
  component: TokenTableComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Sistema de color de Bioma. Paletas neutrales, de marca y tokens semánticos para texto, fondos y acciones.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<TokenTableComponent>;

// Neutral Palette Tokens
const neutralTokens: Token[] = [
  { name: '50', value: '#FAFAFA', hex: '#FAFAFA', rgb: 'rgb(250, 250, 250)', usage: 'Fondos muy claros', type: 'color' },
  { name: '100', value: '#F5F5F2', hex: '#F5F5F2', rgb: 'rgb(245, 245, 242)', usage: 'Fondos claros', type: 'color' },
  { name: '200', value: '#E3E3E3', hex: '#E3E3E3', rgb: 'rgb(227, 227, 227)', usage: 'Bordes sutiles', type: 'color' },
  { name: '300', value: '#C2C2BF', hex: '#C2C2BF', rgb: 'rgb(194, 194, 191)', usage: 'Bordes medios', type: 'color' },
  { name: '400', value: '#969696', hex: '#969696', rgb: 'rgb(150, 150, 150)', usage: 'Texto deshabilitado', type: 'color' },
  { name: '500', value: '#737373', hex: '#737373', rgb: 'rgb(115, 115, 115)', usage: 'Texto secundario', type: 'color' },
  { name: '600', value: '#575454', hex: '#575454', rgb: 'rgb(87, 84, 84)', usage: 'Texto secundario fuerte', type: 'color' },
  { name: '700', value: '#404040', hex: '#404040', rgb: 'rgb(64, 64, 64)', usage: 'Texto primario', type: 'color' },
  { name: '800', value: '#30302E', hex: '#30302E', rgb: 'rgb(48, 48, 46)', usage: 'Texto fuerte', type: 'color' },
  { name: '900', value: '#262626', hex: '#262626', rgb: 'rgb(38, 38, 38)', usage: 'Texto muy fuerte', type: 'color' },
  { name: '950', value: '#121212', hex: '#121212', rgb: 'rgb(18, 18, 18)', usage: 'Fondos dark mode', type: 'color' },
  { name: 'white', value: '#FFFFFF', hex: '#FFFFFF', rgb: 'rgb(255, 255, 255)', usage: 'Blanco puro', type: 'color' },
  { name: 'black', value: '#000000', hex: '#000000', rgb: 'rgb(0, 0, 0)', usage: 'Negro puro', type: 'color' },
];

// Brand Palette Tokens
const brandTokens: Token[] = [
  { name: '50', value: '#FFEDED', hex: '#FFEDED', rgb: 'rgb(255, 237, 237)', usage: 'Fondo muy sutil', type: 'color' },
  { name: '100', value: '#FFD1D4', hex: '#FFD1D4', rgb: 'rgb(255, 209, 212)', usage: 'Fondo sutil', type: 'color' },
  { name: '200', value: '#FFA3AB', hex: '#FFA3AB', rgb: 'rgb(255, 163, 171)', usage: 'Fondo medio', type: 'color' },
  { name: '300', value: '#FF4D61', hex: '#FF4D61', rgb: 'rgb(255, 77, 97)', usage: 'Texto sobre claro', type: 'color' },
  { name: '400', value: '#F52B4A', hex: '#F52B4A', rgb: 'rgb(245, 43, 74)', usage: 'Hover light', type: 'color' },
  { name: '500', value: '#E30038', hex: '#E30038', rgb: 'rgb(227, 0, 56)', usage: '⭐ Principal - Bioma Red', type: 'color' },
  { name: '600', value: '#C40030', hex: '#C40030', rgb: 'rgb(196, 0, 48)', usage: 'Pressed light', type: 'color' },
  { name: '700', value: '#BA1F38', hex: '#BA1F38', rgb: 'rgb(186, 31, 56)', usage: 'Strong', type: 'color' },
  { name: '800', value: '#9C0024', hex: '#9C0024', rgb: 'rgb(156, 0, 36)', usage: 'Very strong', type: 'color' },
  { name: '900', value: '#700017', hex: '#700017', rgb: 'rgb(112, 0, 23)', usage: 'Dark mode bg', type: 'color' },
  { name: '950', value: '#45000A', hex: '#45000A', rgb: 'rgb(69, 0, 10)', usage: 'Dark mode strong', type: 'color' },
];

// Semantic Text Tokens
const semanticTextTokens: Token[] = [
  { name: 'strong', value: 'var(--neutral-950)', lightMode: '{neutral/950}', darkMode: '{neutral/white}', usage: 'Títulos principales', type: 'semantic' },
  { name: 'primary', value: 'var(--neutral-800)', lightMode: '{neutral/800}', darkMode: '{neutral/50}', usage: 'Texto de cuerpo', type: 'semantic' },
  { name: 'secondary', value: 'var(--neutral-700)', lightMode: '{neutral/700}', darkMode: '{neutral/300}', usage: 'Texto secundario', type: 'semantic' },
  { name: 'tertiary', value: 'var(--neutral-600)', lightMode: '{neutral/600}', darkMode: '{neutral/400}', usage: 'Texto terciario', type: 'semantic' },
  { name: 'muted', value: 'var(--neutral-500)', lightMode: '{neutral/500}', darkMode: '{neutral/500}', usage: 'Texto atenuado', type: 'semantic' },
  { name: 'disabled', value: 'var(--neutral-300)', lightMode: '{neutral/300}', darkMode: '{neutral/600}', usage: 'Texto deshabilitado', type: 'semantic' },
  { name: 'inverse', value: 'var(--neutral-white)', lightMode: '{neutral/white}', darkMode: '{neutral/950}', usage: 'Sobre fondos oscuros', type: 'semantic' },
  { name: 'link', value: '#0066CC', lightMode: '#0066CC', darkMode: '#60A5FA', usage: 'Enlaces', type: 'semantic' },
];

// Semantic Background Tokens
const semanticBgTokens: Token[] = [
  { name: 'default', value: 'var(--neutral-white)', lightMode: '{neutral/white}', darkMode: '{neutral/950}', usage: 'Fondos primarios', type: 'semantic' },
  { name: 'subtle', value: 'var(--neutral-50)', lightMode: '{neutral/50}', darkMode: '{neutral/900}', usage: 'Fondos secundarios', type: 'semantic' },
  { name: 'muted', value: 'var(--neutral-100)', lightMode: '{neutral/100}', darkMode: '{neutral/800}', usage: 'Fondos terciarios', type: 'semantic' },
  { name: 'inverse', value: 'var(--neutral-950)', lightMode: '{neutral/950}', darkMode: '{neutral/white}', usage: 'Fondos oscuros', type: 'semantic' },
  { name: 'overlay', value: 'rgba(0, 0, 0, 0.5)', usage: 'Overlay de modales', type: 'semantic' },
];

// Semantic Border Tokens
const semanticBorderTokens: Token[] = [
  { name: 'subtle', value: 'var(--neutral-200)', lightMode: '{neutral/200}', darkMode: '{neutral/800}', usage: 'Bordes sutiles', type: 'semantic' },
  { name: 'default', value: 'var(--neutral-300)', lightMode: '{neutral/300}', darkMode: '{neutral/700}', usage: 'Bordes por defecto', type: 'semantic' },
  { name: 'strong', value: 'var(--neutral-400)', lightMode: '{neutral/400}', darkMode: '{neutral/600}', usage: 'Bordes fuertes', type: 'semantic' },
  { name: 'inverse', value: 'var(--neutral-white)', lightMode: '{neutral/white}', darkMode: '{neutral/950}', usage: 'Bordes inversos', type: 'semantic' },
];

// Semantic Action Tokens - Primary
const semanticPrimaryTokens: Token[] = [
  { name: 'default', value: 'var(--brand-500)', lightMode: '{brand/500}', usage: 'Estado normal', type: 'semantic' },
  { name: 'hover', value: 'var(--brand-600)', lightMode: '{brand/600}', usage: 'Estado hover', type: 'semantic' },
  { name: 'active', value: 'var(--brand-700)', lightMode: '{brand/700}', usage: 'Estado pressed', type: 'semantic' },
  { name: 'disabled', value: 'var(--neutral-300)', lightMode: '{neutral/300}', usage: 'Estado deshabilitado', type: 'semantic' },
  { name: 'subtle', value: 'var(--brand-50)', lightMode: '{brand/50}', darkMode: '{brand/950}', usage: 'Fondo sutil', type: 'semantic' },
  { name: 'strong', value: 'var(--neutral-white)', usage: 'Texto sobre brand', type: 'semantic' },
];

export const NeutralPalette: Story = {
  args: {
    tokens: neutralTokens,
    title: '🎨 Paleta Neutral',
    prefix: 'neutral/',
    showSampleColumn: true,
  },
};

export const BrandPalette: Story = {
  args: {
    tokens: brandTokens,
    title: '🔴 Paleta Brand - Rojo Bioma',
    prefix: 'brand/',
    showSampleColumn: true,
  },
};

export const SemanticText: Story = {
  args: {
    tokens: semanticTextTokens,
    title: '📝 Tokens Semánticos - Text',
    prefix: 'text/',
    showSampleColumn: false,
  },
};

export const SemanticBackground: Story = {
  args: {
    tokens: semanticBgTokens,
    title: '🖼️ Tokens Semánticos - Background',
    prefix: 'bg/',
    showSampleColumn: true,
  },
};

export const SemanticBorder: Story = {
  args: {
    tokens: semanticBorderTokens,
    title: '🔲 Tokens Semánticos - Border',
    prefix: 'border/',
    showSampleColumn: true,
  },
};

export const SemanticPrimary: Story = {
  args: {
    tokens: semanticPrimaryTokens,
    title: '🎯 Tokens Semánticos - Primary Action',
    prefix: 'primary/',
    showSampleColumn: true,
  },
};

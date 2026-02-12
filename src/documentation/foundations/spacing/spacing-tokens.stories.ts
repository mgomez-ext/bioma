import { Meta, StoryObj } from '@storybook/angular';
import { TokenTableComponent } from '../../../app/components/token-table/token-table.component';
import { Token } from '../../../app/components/token-doc/token-doc.component';

const meta: Meta<TokenTableComponent> = {
  title: 'Bioma 2.0/Foundations/Spacing',
  component: TokenTableComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Sistema de espaciado de Bioma basado en escala de 4px. Usado para padding, margin y gaps.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<TokenTableComponent>;

const spacingTokens: Token[] = [
  { name: '0', value: '0px', usage: 'Sin espacio', type: 'spacing' },
  { name: '1', value: '4px', usage: 'Espaciado mínimo (0.25rem)', type: 'spacing' },
  { name: '2', value: '8px', usage: 'Espaciado XS (0.5rem)', type: 'spacing' },
  { name: '3', value: '12px', usage: 'Espaciado SM (0.75rem)', type: 'spacing' },
  { name: '4', value: '16px', usage: 'Espaciado MD - Base (1rem)', type: 'spacing' },
  { name: '5', value: '20px', usage: 'Entre base y LG (1.25rem)', type: 'spacing' },
  { name: '6', value: '24px', usage: 'Espaciado LG (1.5rem)', type: 'spacing' },
  { name: '8', value: '32px', usage: 'Espaciado XL (2rem)', type: 'spacing' },
  { name: '9', value: '36px', usage: 'Espaciado entre XL y 2XL (2.25rem)', type: 'spacing' },
  { name: '10', value: '40px', usage: 'Espaciado 2XL (2.5rem)', type: 'spacing' },
  { name: '12', value: '48px', usage: 'Espaciado 3XL (3rem)', type: 'spacing' },
  { name: '16', value: '64px', usage: 'Espaciado 4XL (4rem)', type: 'spacing' },
];

export const SpacingScale: Story = {
  args: {
    tokens: spacingTokens,
    title: '📏 Escala de Espaciado',
    prefix: 'spacing-',
    showSampleColumn: false,
  },
};

// Story alternativa con visualización de espacios
export const SpacingVisual: Story = {
  render: () => ({
    template: `
      <div style="padding: 24px; font-family: Sora, sans-serif;">
        <h3 style="margin-bottom: 24px;">Escala de Espaciado (Visual)</h3>
        <div style="display: flex; flex-direction: column; gap: 16px;">
          <div style="display: flex; align-items: center; gap: 16px;">
            <div style="width: 120px; color: var(--text-secondary); font-size: 14px;">0px</div>
            <div style="width: 0px; height: 24px; background: var(--brand-500);"></div>
          </div>
          <div style="display: flex; align-items: center; gap: 16px;">
            <div style="width: 120px; color: var(--text-secondary); font-size: 14px;">4px (spacing-1)</div>
            <div style="width: 4px; height: 24px; background: var(--brand-500);"></div>
          </div>
          <div style="display: flex; align-items: center; gap: 16px;">
            <div style="width: 120px; color: var(--text-secondary); font-size: 14px;">8px (spacing-2)</div>
            <div style="width: 8px; height: 24px; background: var(--brand-500);"></div>
          </div>
          <div style="display: flex; align-items: center; gap: 16px;">
            <div style="width: 120px; color: var(--text-secondary); font-size: 14px;">12px (spacing-3)</div>
            <div style="width: 12px; height: 24px; background: var(--brand-500);"></div>
          </div>
          <div style="display: flex; align-items: center; gap: 16px;">
            <div style="width: 120px; color: var(--text-secondary); font-size: 14px;">16px (spacing-4)</div>
            <div style="width: 16px; height: 24px; background: var(--brand-500);"></div>
          </div>
          <div style="display: flex; align-items: center; gap: 16px;">
            <div style="width: 120px; color: var(--text-secondary); font-size: 14px;">20px (spacing-5)</div>
            <div style="width: 20px; height: 24px; background: var(--brand-500);"></div>
          </div>
          <div style="display: flex; align-items: center; gap: 16px;">
            <div style="width: 120px; color: var(--text-secondary); font-size: 14px;">24px (spacing-6)</div>
            <div style="width: 24px; height: 24px; background: var(--brand-500);"></div>
          </div>
          <div style="display: flex; align-items: center; gap: 16px;">
            <div style="width: 120px; color: var(--text-secondary); font-size: 14px;">32px (spacing-8)</div>
            <div style="width: 32px; height: 24px; background: var(--brand-500);"></div>
          </div>
          <div style="display: flex; align-items: center; gap: 16px;">
            <div style="width: 120px; color: var(--text-secondary); font-size: 14px;">40px (spacing-10)</div>
            <div style="width: 40px; height: 24px; background: var(--brand-500);"></div>
          </div>
          <div style="display: flex; align-items: center; gap: 16px;">
            <div style="width: 120px; color: var(--text-secondary); font-size: 14px;">48px (spacing-12)</div>
            <div style="width: 48px; height: 24px; background: var(--brand-500);"></div>
          </div>
          <div style="display: flex; align-items: center; gap: 16px;">
            <div style="width: 120px; color: var(--text-secondary); font-size: 14px;">64px (spacing-16)</div>
            <div style="width: 64px; height: 24px; background: var(--brand-500);"></div>
          </div>
        </div>
      </div>
    `,
  }),
};

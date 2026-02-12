import { Meta, StoryObj } from '@storybook/angular';
import { TokenTableComponent } from '../../../app/components/token-table/token-table.component';
import { Token } from '../../../app/components/token-doc/token-doc.component';

const meta: Meta<TokenTableComponent> = {
  title: 'Bioma 2.0/Foundations/Shadows',
  component: TokenTableComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Sistema de elevación mediante sombras. Usado para crear jerarquía visual y profundidad.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<TokenTableComponent>;

const shadowTokens: Token[] = [
  { name: 'xs', value: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', usage: 'Elevación mínima (cards planos)', type: 'shadow' },
  { name: 'sm', value: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)', usage: 'Elevación pequeña (cards)', type: 'shadow' },
  { name: 'md', value: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', usage: 'Elevación media (dropdowns)', type: 'shadow' },
  { name: 'lg', value: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', usage: 'Elevación grande (modals)', type: 'shadow' },
  { name: 'xl', value: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)', usage: 'Elevación muy grande (popups)', type: 'shadow' },
];

export const Shadows: Story = {
  args: {
    tokens: shadowTokens,
    title: '🌑 Sombras de Elevación',
    prefix: 'shadow-',
    showSampleColumn: false,
  },
};

// Story con visualización de sombras
export const ShadowsVisual: Story = {
  render: () => ({
    template: `
      <div style="padding: 48px; font-family: Sora, sans-serif; background: var(--neutral-50);">
        <h3 style="margin-bottom: 32px;">Escala de Sombras (Visual)</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 32px;">
          <div style="text-align: center;">
            <div style="
              width: 160px;
              height: 120px;
              background: white;
              border-radius: 8px;
              box-shadow: var(--shadow-xs);
              margin: 0 auto 16px;
              display: flex;
              align-items: center;
              justify-content: center;
              color: var(--text-secondary);
              font-size: 14px;
            ">XS</div>
            <div style="font-size: 14px; color: var(--text-primary); font-weight: 600;">shadow-xs</div>
            <div style="font-size: 12px; color: var(--text-secondary);">Elevación mínima</div>
          </div>

          <div style="text-align: center;">
            <div style="
              width: 160px;
              height: 120px;
              background: white;
              border-radius: 8px;
              box-shadow: var(--shadow-sm);
              margin: 0 auto 16px;
              display: flex;
              align-items: center;
              justify-content: center;
              color: var(--text-secondary);
              font-size: 14px;
            ">SM</div>
            <div style="font-size: 14px; color: var(--text-primary); font-weight: 600;">shadow-sm</div>
            <div style="font-size: 12px; color: var(--text-secondary);">Cards</div>
          </div>

          <div style="text-align: center;">
            <div style="
              width: 160px;
              height: 120px;
              background: white;
              border-radius: 8px;
              box-shadow: var(--shadow-md);
              margin: 0 auto 16px;
              display: flex;
              align-items: center;
              justify-content: center;
              color: var(--text-secondary);
              font-size: 14px;
            ">MD</div>
            <div style="font-size: 14px; color: var(--text-primary); font-weight: 600;">shadow-md</div>
            <div style="font-size: 12px; color: var(--text-secondary);">Dropdowns</div>
          </div>

          <div style="text-align: center;">
            <div style="
              width: 160px;
              height: 120px;
              background: white;
              border-radius: 8px;
              box-shadow: var(--shadow-lg);
              margin: 0 auto 16px;
              display: flex;
              align-items: center;
              justify-content: center;
              color: var(--text-secondary);
              font-size: 14px;
            ">LG</div>
            <div style="font-size: 14px; color: var(--text-primary); font-weight: 600;">shadow-lg</div>
            <div style="font-size: 12px; color: var(--text-secondary);">Modals</div>
          </div>

          <div style="text-align: center;">
            <div style="
              width: 160px;
              height: 120px;
              background: white;
              border-radius: 8px;
              box-shadow: var(--shadow-xl);
              margin: 0 auto 16px;
              display: flex;
              align-items: center;
              justify-content: center;
              color: var(--text-secondary);
              font-size: 14px;
            ">XL</div>
            <div style="font-size: 14px; color: var(--text-primary); font-weight: 600;">shadow-xl</div>
            <div style="font-size: 12px; color: var(--text-secondary);">Popups</div>
          </div>
        </div>
      </div>
    `,
  }),
};

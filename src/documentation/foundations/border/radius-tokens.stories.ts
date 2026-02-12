import { Meta, StoryObj } from '@storybook/angular';
import { TokenTableComponent } from '../../../app/components/token-table/token-table.component';
import { Token } from '../../../app/components/token-doc/token-doc.component';

const meta: Meta<TokenTableComponent> = {
  title: 'Bioma 2.0/Foundations/Border Radius',
  component: TokenTableComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Sistema de border radius de Bioma. Usado para esquinas redondeadas en componentes.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<TokenTableComponent>;

const radiusTokens: Token[] = [
  { name: 'none', value: '0px', usage: 'Sin bordes redondeados', type: 'radius' },
  { name: 'xs', value: '2px', usage: 'Bordes mínimos (inputs pequeños)', type: 'radius' },
  { name: 'sm', value: '4px', usage: 'Bordes pequeños (buttons, inputs)', type: 'radius' },
  { name: 'md', value: '8px', usage: 'Bordes medianos (cards, modals)', type: 'radius' },
  { name: 'lg', value: '12px', usage: 'Bordes grandes (containers)', type: 'radius' },
  { name: 'xl', value: '16px', usage: 'Bordes extra grandes', type: 'radius' },
  { name: '2xl', value: '24px', usage: 'Bordes muy grandes', type: 'radius' },
  { name: 'full', value: '9999px', usage: 'Bordes circulares (pills, avatars)', type: 'radius' },
];

export const BorderRadius: Story = {
  args: {
    tokens: radiusTokens,
    title: '🔘 Border Radius',
    prefix: 'radius-',
    showSampleColumn: false,
  },
};

// Story con visualización de border radius
export const RadiusVisual: Story = {
  render: () => ({
    template: `
      <div style="padding: 48px; font-family: Sora, sans-serif;">
        <h3 style="margin-bottom: 32px;">Escala de Border Radius (Visual)</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 32px;">
          <div style="text-align: center;">
            <div style="
              width: 120px;
              height: 120px;
              background: var(--brand-500);
              border-radius: var(--radius-none);
              margin: 0 auto 16px;
              display: flex;
              align-items: center;
              justify-content: center;
              color: white;
              font-size: 14px;
              font-weight: 600;
            ">NONE</div>
            <div style="font-size: 14px; color: var(--text-primary); font-weight: 600;">radius-none</div>
            <div style="font-size: 12px; color: var(--text-secondary);">0px</div>
          </div>

          <div style="text-align: center;">
            <div style="
              width: 120px;
              height: 120px;
              background: var(--brand-500);
              border-radius: var(--radius-xs);
              margin: 0 auto 16px;
              display: flex;
              align-items: center;
              justify-content: center;
              color: white;
              font-size: 14px;
              font-weight: 600;
            ">XS</div>
            <div style="font-size: 14px; color: var(--text-primary); font-weight: 600;">radius-xs</div>
            <div style="font-size: 12px; color: var(--text-secondary);">2px</div>
          </div>

          <div style="text-align: center;">
            <div style="
              width: 120px;
              height: 120px;
              background: var(--brand-500);
              border-radius: var(--radius-sm);
              margin: 0 auto 16px;
              display: flex;
              align-items: center;
              justify-content: center;
              color: white;
              font-size: 14px;
              font-weight: 600;
            ">SM</div>
            <div style="font-size: 14px; color: var(--text-primary); font-weight: 600;">radius-sm</div>
            <div style="font-size: 12px; color: var(--text-secondary);">4px</div>
          </div>

          <div style="text-align: center;">
            <div style="
              width: 120px;
              height: 120px;
              background: var(--brand-500);
              border-radius: var(--radius-md);
              margin: 0 auto 16px;
              display: flex;
              align-items: center;
              justify-content: center;
              color: white;
              font-size: 14px;
              font-weight: 600;
            ">MD</div>
            <div style="font-size: 14px; color: var(--text-primary); font-weight: 600;">radius-md</div>
            <div style="font-size: 12px; color: var(--text-secondary);">8px</div>
          </div>

          <div style="text-align: center;">
            <div style="
              width: 120px;
              height: 120px;
              background: var(--brand-500);
              border-radius: var(--radius-lg);
              margin: 0 auto 16px;
              display: flex;
              align-items: center;
              justify-content: center;
              color: white;
              font-size: 14px;
              font-weight: 600;
            ">LG</div>
            <div style="font-size: 14px; color: var(--text-primary); font-weight: 600;">radius-lg</div>
            <div style="font-size: 12px; color: var(--text-secondary);">12px</div>
          </div>

          <div style="text-align: center;">
            <div style="
              width: 120px;
              height: 120px;
              background: var(--brand-500);
              border-radius: var(--radius-xl);
              margin: 0 auto 16px;
              display: flex;
              align-items: center;
              justify-content: center;
              color: white;
              font-size: 14px;
              font-weight: 600;
            ">XL</div>
            <div style="font-size: 14px; color: var(--text-primary); font-weight: 600;">radius-xl</div>
            <div style="font-size: 12px; color: var(--text-secondary);">16px</div>
          </div>

          <div style="text-align: center;">
            <div style="
              width: 120px;
              height: 120px;
              background: var(--brand-500);
              border-radius: var(--radius-2xl);
              margin: 0 auto 16px;
              display: flex;
              align-items: center;
              justify-content: center;
              color: white;
              font-size: 14px;
              font-weight: 600;
            ">2XL</div>
            <div style="font-size: 14px; color: var(--text-primary); font-weight: 600;">radius-2xl</div>
            <div style="font-size: 12px; color: var(--text-secondary);">24px</div>
          </div>

          <div style="text-align: center;">
            <div style="
              width: 120px;
              height: 120px;
              background: var(--brand-500);
              border-radius: var(--radius-full);
              margin: 0 auto 16px;
              display: flex;
              align-items: center;
              justify-content: center;
              color: white;
              font-size: 14px;
              font-weight: 600;
            ">FULL</div>
            <div style="font-size: 14px; color: var(--text-primary); font-weight: 600;">radius-full</div>
            <div style="font-size: 12px; color: var(--text-secondary);">9999px</div>
          </div>
        </div>
      </div>
    `,
  }),
};

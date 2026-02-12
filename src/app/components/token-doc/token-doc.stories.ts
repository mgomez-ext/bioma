import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { TokenDocComponent, Token } from './token-doc.component';
import { CommonModule } from '@angular/common';

const meta: Meta<TokenDocComponent> = {
  title: '_Internal/TokenDoc',
  component: TokenDocComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, TokenDocComponent],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    token: {
      control: 'object',
      description: 'Token object with name, value, and optional metadata',
    },
    rowIndex: {
      control: 'number',
      description: 'Row index for zebra striping (even/odd rows)',
    },
    prefix: {
      control: 'text',
      description: 'Prefix to prepend to token name display',
    },
  },
};

export default meta;
type Story = StoryObj<TokenDocComponent>;

// Sample tokens for demonstrations
const colorToken: Token = {
  name: 'brand/500',
  value: '#E30038',
  hex: '#E30038',
  rgb: 'rgb(227, 0, 56)',
  usage: 'Primary brand color',
  type: 'color',
};

const spacingToken: Token = {
  name: 'spacing-4',
  value: '16px',
  usage: 'Base spacing unit',
  type: 'spacing',
};

const typographyToken: Token = {
  name: 'font-size/base',
  value: '16px',
  usage: 'Body text size',
  type: 'typography',
};

const shadowToken: Token = {
  name: 'shadow/md',
  value: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  usage: 'Medium elevation shadow',
  type: 'shadow',
};

const semanticToken: Token = {
  name: 'text/primary',
  value: '{gray/800}',
  lightMode: '{gray/800}',
  darkMode: '{gray/50}',
  usage: 'Primary text color',
  type: 'semantic',
};

// Default Story - Color Token
export const Default: Story = {
  args: {
    token: colorToken,
    rowIndex: 0,
    prefix: '',
  },
};

// Color Token Example
export const ColorToken: Story = {
  args: {
    token: {
      name: 'brand/500',
      value: '#E30038',
      hex: '#E30038',
      rgb: 'rgb(227, 0, 56)',
      usage: 'Primary brand color - Bioma red',
      type: 'color',
    },
    rowIndex: 0,
    prefix: '',
  },
};

// Neutral Color Token
export const NeutralColorToken: Story = {
  args: {
    token: {
      name: 'neutral/700',
      value: '#404040',
      hex: '#404040',
      rgb: 'rgb(64, 64, 64)',
      usage: 'Primary text color',
      type: 'color',
    },
    rowIndex: 1,
    prefix: '',
  },
};

// Spacing Token Example
export const SpacingToken: Story = {
  args: {
    token: spacingToken,
    rowIndex: 0,
    prefix: 'spacing/',
  },
};

// Typography Token Example
export const TypographyToken: Story = {
  args: {
    token: typographyToken,
    rowIndex: 1,
    prefix: 'typography/',
  },
};

// Border Radius Token
export const RadiusToken: Story = {
  args: {
    token: {
      name: 'radius-md',
      value: '8px',
      usage: 'Medium border radius',
      type: 'radius',
    },
    rowIndex: 0,
    prefix: '',
  },
};

// Shadow Token Example
export const ShadowToken: Story = {
  args: {
    token: shadowToken,
    rowIndex: 1,
    prefix: '',
  },
};

// Semantic Token Example
export const SemanticToken: Story = {
  args: {
    token: semanticToken,
    rowIndex: 0,
    prefix: '',
  },
};

// Semantic Token with Dark Mode
export const SemanticTokenDarkMode: Story = {
  args: {
    token: {
      name: 'text/inverse',
      value: '{neutral/white}',
      lightMode: '{neutral/white}',
      darkMode: '{gray/950}',
      usage: 'Text on dark backgrounds',
      type: 'semantic',
    },
    rowIndex: 1,
    prefix: '',
  },
};

// Even Row (Zebra Striping)
export const EvenRow: Story = {
  args: {
    token: colorToken,
    rowIndex: 0,
    prefix: '',
  },
};

// Odd Row (Zebra Striping)
export const OddRow: Story = {
  args: {
    token: colorToken,
    rowIndex: 1,
    prefix: '',
  },
};

// With Prefix
export const WithPrefix: Story = {
  args: {
    token: {
      name: '500',
      value: '#E30038',
      hex: '#E30038',
      rgb: 'rgb(227, 0, 56)',
      usage: 'Primary brand color',
      type: 'color',
    },
    rowIndex: 0,
    prefix: 'brand/',
  },
};

// All Token Types in Table Context
export const AllTokenTypes: Story = {
  render: () => ({
    template: `
      <div style="padding: 24px; font-family: Sora, sans-serif;">
        <h3 style="margin-bottom: 16px;">Token Documentation Examples</h3>
        <p style="margin-bottom: 24px; color: #737373;">
          The TokenDoc component displays individual token rows in design system documentation tables.
        </p>

        <table style="width: 100%; border-collapse: collapse; border: 1px solid #e3e8ee; font-family: Sora, sans-serif;">
          <thead>
            <tr style="background-color: #f5f5f5; text-align: left;">
              <th style="padding: 12px 16px; border-bottom: 2px solid #e3e8ee;">Sample</th>
              <th style="padding: 12px 16px; border-bottom: 2px solid #e3e8ee;">Name</th>
              <th style="padding: 12px 16px; border-bottom: 2px solid #e3e8ee;">Value</th>
              <th style="padding: 12px 16px; border-bottom: 2px solid #e3e8ee;">Usage</th>
            </tr>
          </thead>
          <tbody>
            <app-token-doc
              [token]="{
                name: 'brand/500',
                value: '#E30038',
                hex: '#E30038',
                rgb: 'rgb(227, 0, 56)',
                usage: 'Primary brand color',
                type: 'color'
              }"
              [rowIndex]="0"
            ></app-token-doc>
            <app-token-doc
              [token]="{
                name: 'neutral/700',
                value: '#404040',
                hex: '#404040',
                usage: 'Primary text',
                type: 'color'
              }"
              [rowIndex]="1"
            ></app-token-doc>
            <app-token-doc
              [token]="{
                name: 'spacing-4',
                value: '16px',
                usage: 'Base spacing',
                type: 'spacing'
              }"
              [rowIndex]="2"
            ></app-token-doc>
            <app-token-doc
              [token]="{
                name: 'text/primary',
                value: '{gray/800}',
                lightMode: '{gray/800}',
                darkMode: '{gray/50}',
                usage: 'Primary text color',
                type: 'semantic'
              }"
              [rowIndex]="3"
            ></app-token-doc>
          </tbody>
        </table>
      </div>
    `,
  }),
};

// Playground
export const Playground: Story = {
  args: {
    token: {
      name: 'custom-token',
      value: '#123456',
      hex: '#123456',
      rgb: 'rgb(18, 52, 86)',
      usage: 'Customize this token',
      type: 'color',
    },
    rowIndex: 0,
    prefix: '',
  },
};

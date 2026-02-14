import type { Preview } from '@storybook/angular';
import { componentWrapperDecorator } from '@storybook/angular';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    expanded: true,
    hideNoControlsWarning: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};


/**
 * Bioma 2.0 Design System - Storybook Preview Configuration
 *
 * Uses default Storybook styling with Sora typography.
 */
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      expanded: true,
      sort: 'requiredFirst',
    },

    layout: 'centered',

    actions: {
      argTypesRegex: '^on[A-Z].*',
    },

    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: {
            width: '375px',
            height: '667px',
          },
        },
        tablet: {
          name: 'Tablet',
          styles: {
            width: '768px',
            height: '1024px',
          },
        },
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1440px',
            height: '900px',
          },
        },
      },
    },

    options: {
      storySort: {
        order: [
          'Bioma 2.0',
          [
            'Getting Started',
            ['Introduction', 'Installation', 'Quick Start'],
            'Foundations',
            [
              'Overview',
              'Design Tokens',
              ['Overview', 'Authoring Guide', 'Reading Guide', 'Usage Guide', 'All Design Tokens'],
              'Color',
              'Typography',
              'Spacing',
              'Layout',
              'Border',
              'Elevation',
              'Animation',
              'Iconography',
            ],
            'Components',
            ['Overview', 'Button', 'Input', 'Checkbox', 'Radio'],
            'Directives',
            ['Overview'],
            'Patterns',
            ['Overview'],
            'Objects',
            ['Overview'],
            'Data Visualization',
            ['Overview'],
            'Content',
            ['Overview'],
            'Accessibility',
            ['Overview'],
          ],
        ],
      },
    },
  },

  decorators: [
    componentWrapperDecorator(
      (story) =>
        `<div style="font-family: 'Sora', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; padding: 24px;">${story}</div>`
    ),
  ],
};

export default preview;

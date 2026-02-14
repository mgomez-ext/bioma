import { create } from 'storybook/theming/create';

/**
 * Bioma 2.0 Design System - Storybook Light Theme
 *
 * Tema personalizado que usa los colores y tipografía de Bioma 2.0
 */
export default create({
  base: 'light',

  // Typography
  fontBase: '"Sora", -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif',
  fontCode: '"SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',

  // Brand
  brandTitle: 'Bioma 2.1 Design System',
  brandUrl: 'https://bioma.com',
  brandImage: undefined,
  brandTarget: '_self',

  // UI Colors - Bioma light theme
  colorPrimary: '#E20039',        // brand/500 - Bioma Red
  colorSecondary: '#E20039',      // brand/500

  // UI
  appBg: '#FFFFFF',               // neutral/white
  appContentBg: '#FAFAFA',       // neutral/50
  appPreviewBg: '#FFFFFF',       // neutral/white
  appBorderColor: '#E5E5E5',     // neutral/200
  appBorderRadius: 8,             // radius-md

  // Text colors
  textColor: '#171717',           // neutral/950 - Primary text
  textInverseColor: '#FFFFFF',    // neutral/white
  textMutedColor: '#737373',     // neutral/500 - Muted text

  // Toolbar default and active colors
  barTextColor: '#525252',        // neutral/600
  barHoverColor: '#E30038',       // brand/500
  barSelectedColor: '#E30038',    // brand/500
  barBg: '#FAFAFA',               // neutral/50

  // Form colors
  inputBg: '#FFFFFF',             // neutral/white
  inputBorder: '#A3A3A3',         // neutral/400
  inputTextColor: '#171717',      // neutral/950
  inputBorderRadius: 8,           // radius-md

  // Buttons
  buttonBg: '#E20039',            // primary-default
  buttonBorder: '#E20039',        // primary-default
  booleanBg: '#F5F5F5',          // neutral/100
  booleanSelectedBg: '#E20039',   // brand/500
});

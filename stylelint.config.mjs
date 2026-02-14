/** @type {import("stylelint").Config} */
export default {
  extends: ['stylelint-config-standard-scss'],
  overrides: [
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss',
    },
  ],
  rules: {
    // Allow both 3 and 6 digit hex (design tokens often use full hex)
    'color-hex-length': null,
    // Allow rgba for backwards compatibility
    'color-function-notation': null,
    'alpha-value-notation': null,
    // Font family names - keep as-is for system fonts
    'value-keyword-case': null,
    'font-family-name-quotes': null,
    // Vendor prefixes needed for fonts
    'property-no-vendor-prefix': null,
    'value-no-vendor-prefix': null,
    // word-wrap is deprecated but still needed for Material Symbols
    'property-no-deprecated': null,
    // Allow duplicate :root for logical grouping (tokens.scss)
    'no-duplicate-selectors': null,
    // Allow empty blocks (e.g. for aria-label placeholder)
    'block-no-empty': null,
    // Keyframes - allow camelCase for animation names
    'keyframes-name-pattern': null,
    // Custom property empty line - optional style
    'custom-property-empty-line-before': null,
    // Allow BEM naming (block__element--modifier)
    'selector-class-pattern': null,
  },
  ignoreFiles: [],
};

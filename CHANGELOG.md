# Changelog

All notable changes to the Bioma Design System will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2026-02-12

### Added

#### Components
- **ButtonComponent** - Full-featured button component with:
  - 4 variants: filled, outlined, flat, link
  - 3 sizes: small, medium, large
  - Icon support (start and end positions)
  - Full-width option
  - Disabled state
  - Comprehensive Storybook documentation (16 stories)

- **IconFontComponent** - Material Symbols icon integration:
  - Support for 2,500+ Material Design icons
  - Configurable sizes and styles (filled/outlined)
  - Storybook documentation with examples

- **TokenDocComponent** - Design token documentation component:
  - Display individual design tokens in table format
  - Support for color, spacing, typography, shadow, and semantic tokens
  - Zebra striping for readability
  - Comprehensive Storybook stories (15 variations)

- **TokenTableComponent** - Token collection table component:
  - Display groups of related design tokens
  - Configurable columns and display options
  - Storybook examples for color palettes, spacing scales, and semantic tokens

#### Design System
- **Comprehensive Design Token System** (150+ tokens):
  - Foundation Level: Neutral palette (13 shades), Brand palette (11 Bioma Red shades)
  - Semantic Level: Text colors (8 tokens), Background colors (5 tokens), Border colors (4 tokens)
  - Spacing scale: 11 values (0px to 64px)
  - Border radius: 8 values (0px to 9999px/full)
  - Shadows: 5 elevation levels (xs to xl)
  - Typography system with font families, sizes, weights, and line heights
  - Status colors (Success, Warning, Error, Info)
  - Interactive states (Focus, Hover, Active, Disabled)

- **SCSS Token Architecture**:
  - 277 lines of organized token definitions
  - CSS custom properties for runtime theming
  - Two-level token system (foundation + semantic)

#### Documentation
- **Storybook 10.1 Integration**:
  - Custom Bioma theme with brand colors
  - Accessibility addon for WCAG compliance testing
  - Theme switching addon
  - 33 MDX documentation files
  - Interactive component playground

- **Documentation Structure**:
  - Getting Started guides (Introduction, Installation, Quick Start)
  - Foundations documentation (Color, Typography, Spacing, Layout, Shadows, etc.)
  - Component documentation with live examples
  - Accessibility guidelines

#### Development Infrastructure
- **Angular 21.1** with standalone components
- **TypeScript Strict Mode**:
  - Full type safety enabled
  - Strict template checking
  - Enhanced linting (noUnusedLocals, noUnusedParameters)

- **Build System**:
  - Angular CLI 21.1.4
  - ng-packagr for library builds
  - FESM2022 module format
  - TypeScript declaration files (.d.ts)

- **Library Distribution**:
  - Scoped NPM package: @mgomez-ext/bioma
  - Proper package.json with exports
  - Clean distribution via .npmignore
  - License: Proprietary (All Rights Reserved)

### Changed
- Refactored TokenDoc component from inline styles to proper SCSS (102 lines moved to stylesheet)
- All components now use design token CSS variables instead of hardcoded values
- Project architecture converted from application to library mode

### Technical Details
- **Bundle Size**: 36KB FESM2022 bundle (uncompressed)
- **Components**: 4 standalone Angular components
- **Stories**: 48+ Storybook stories across all components
- **TypeScript**: Strict mode with enhanced linting
- **Dependencies**: Angular 21.1, Bootstrap 5.3, Material Symbols 0.40
- **Test Framework**: Vitest (unit testing ready)

### Repository
- Git repository initialized
- Initial commit with 107 files (39,133 lines)
- Tagged as v0.1.0
- Comprehensive .gitignore for Angular projects

[0.1.0]: https://github.com/mgomez-ext/bioma/releases/tag/v0.1.0

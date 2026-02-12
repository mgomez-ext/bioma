# Bioma 2.0 Design System

[![Angular](https://img.shields.io/badge/Angular-21.1-DD0031?logo=angular)](https://angular.dev)
[![License](https://img.shields.io/badge/License-Proprietary-red.svg)](./LICENSE)
[![npm version](https://img.shields.io/npm/v/@sapuk-ai/bioma.svg)](https://www.npmjs.com/package/@sapuk-ai/bioma)

A comprehensive Angular component library with a robust design token system for building consistent, accessible user interfaces.

## Features

- 🎨 **Comprehensive Design Tokens** - 150+ semantic and foundation tokens for colors, spacing, typography, shadows, and more
- 🧩 **Angular 21.1 Standalone Components** - Modern, tree-shakeable components
- ♿ **Accessibility First** - WCAG-compliant components with built-in a11y features
- 📱 **Responsive** - Mobile-first design with Bootstrap 5.3 integration
- 🎭 **Theming Support** - Light/dark mode ready with semantic tokens
- 📚 **Storybook Documentation** - Interactive component playground and documentation
- 🔤 **Material Symbols** - 2,500+ icons via Google's Material Symbols

## Installation

```bash
npm install @sapuk-ai/bioma
```

### Peer Dependencies

This library requires the following peer dependencies:

```bash
npm install @angular/common @angular/core @angular/platform-browser rxjs
```

## Quick Start

### 1. Import Components

Import standalone components directly into your Angular application:

```typescript
import { Component } from '@angular/core';
import { ButtonComponent } from '@sapuk-ai/bioma';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <bio-button
      label="Click Me"
      variant="filled"
      size="large"
      (clicked)="handleClick($event)">
    </bio-button>
  `
})
export class AppComponent {
  handleClick(event: MouseEvent) {
    console.log('Button clicked!', event);
  }
}
```

### 2. Import Design Tokens

Add the design tokens stylesheet to your global styles:

```scss
// src/styles.scss
@import '@sapuk-ai/bioma/src/styles/tokens';
```

Or import in your `angular.json`:

```json
{
  "projects": {
    "your-app": {
      "architect": {
        "build": {
          "options": {
            "styles": [
              "node_modules/@sapuk-ai/bioma/src/styles/tokens.scss",
              "src/styles.scss"
            ]
          }
        }
      }
    }
  }
}
```

### 3. Use Design Tokens

Access design tokens via CSS custom properties:

```scss
.my-component {
  color: var(--text-primary);
  background-color: var(--bg-default);
  padding: var(--spacing-4);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
}
```

## Available Components

### Button Component

Full-featured button with multiple variants, sizes, and states:

```typescript
import { ButtonComponent } from '@sapuk-ai/bioma';
```

**Properties:**
- `label` - Button text
- `variant` - `'filled' | 'outlined' | 'flat' | 'link'`
- `size` - `'small' | 'medium' | 'large'`
- `disabled` - Boolean
- `fullWidth` - Boolean
- `iconStart`, `iconEnd` - Material Symbol icon names
- `(clicked)` - Click event emitter

**Example:**
```html
<bio-button
  label="Submit"
  variant="filled"
  size="large"
  [iconStart]="true"
  iconStartName="send"
  (clicked)="onSubmit()">
</bio-button>
```

### IconFont Component

Material Symbols icon component:

```typescript
import { IconFontComponent } from '@sapuk-ai/bioma';
```

**Example:**
```html
<bio-icon-font
  icon="home"
  size="24"
  type="rounded">
</bio-icon-font>
```

### Token Documentation Components

For building design system documentation:

```typescript
import { TokenTableComponent, TokenDocComponent } from '@sapuk-ai/bioma';
```

## Design Tokens Reference

### Color Tokens

```scss
// Neutral palette
--neutral-50, --neutral-100, ..., --neutral-950
--neutral-white, --neutral-black

// Brand palette (Bioma Red)
--brand-50, --brand-100, ..., --brand-950

// Semantic colors
--text-primary, --text-secondary, --text-muted
--bg-default, --bg-subtle, --bg-muted
--border-subtle, --border-default, --border-strong
```

### Spacing Tokens

```scss
--spacing-0  // 0px
--spacing-1  // 4px
--spacing-2  // 8px
--spacing-3  // 12px
--spacing-4  // 16px (base)
--spacing-6  // 24px
--spacing-8  // 32px
--spacing-12 // 48px
--spacing-16 // 64px
```

### Typography, Shadows, and More

See the [full token documentation](https://your-storybook-url.chromatic.com) in Storybook.

## Development

### Running Storybook Locally

```bash
git clone https://github.com/sapuk-ai/bioma.git
cd bioma
npm install
npm run storybook
```

Visit `http://localhost:6006` to explore components.

### Building the Library

```bash
npm run build:lib
```

Output: `dist/bioma/`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Copyright © 2026 Bioma. All rights reserved.

This is proprietary software. See [LICENSE](./LICENSE) for details.

## Support

For issues, questions, or feature requests, please contact the Bioma development team.

---

Built with ❤️ using Angular 21.1 and modern web standards.

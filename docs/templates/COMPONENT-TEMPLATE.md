# 🎯 Plantilla para Crear Nuevos Componentes

## Guía paso a paso para crear componentes del Design System Bioma 2.0

---

## 📋 Checklist Pre-Desarrollo

Antes de empezar a escribir código, define:

- [ ] **Nombre del componente** (ej: Input, Checkbox, Card)
- [ ] **Anatomía** (partes visuales del componente)
- [ ] **Props necesarias** (qué se puede configurar)
- [ ] **Variantes visuales** (estilos diferentes)
- [ ] **Estados interactivos** (hover, focus, disabled, etc.)
- [ ] **Tamaños** (small, medium, large)
- [ ] **Tokens semánticos** (qué tokens va a usar)

---

## 🏗️ Paso 1: Definir la Especificación

### Ejemplo: Input Component

```markdown
## Input Component

### Anatomía
```
input-wrapper
├── label (opcional)
├── input-container
│   ├── prefix-icon (opcional)
│   ├── input-field
│   └── suffix-icon (opcional)
└── helper-text (opcional)
```

### Props
- label: string
- placeholder: string
- value: string
- type: 'text' | 'email' | 'password' | 'number'
- size: 'small' | 'medium' | 'large'
- variant: 'default' | 'filled' | 'outlined'
- state: 'default' | 'focused' | 'error' | 'disabled'
- prefixIcon: string (Material Symbol name)
- suffixIcon: string
- helperText: string
- errorText: string

### Variantes
1. Default - Borde inferior solamente
2. Filled - Fondo gris, borde en focus
3. Outlined - Borde completo siempre

### Estados
1. Default - Sin interacción
2. Focused - Usuario enfocado en el input
3. Error - Validación fallida
4. Disabled - No editable

### Tamaños
- Small: 32px altura
- Medium: 40px altura
- Large: 48px altura

### Tokens Semánticos
- Text: --text-primary, --text-secondary, --text-disabled
- Borders: --border-default, --border-strong
- Backgrounds: --bg-default, --bg-subtle
- Focus: --focus-ring
- Error: --error-default, --error-subtle
```

---

## 🏗️ Paso 2: Crear la Estructura de Archivos

```bash
cd src/app/components
mkdir input
cd input

# Crear archivos vacíos
touch input.component.ts
touch input.component.html
touch input.component.scss
touch input.stories.ts
```

---

## 🏗️ Paso 3: TypeScript Component (*.component.ts)

### Template Base

```typescript
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

// 1. Definir Types
export type InputSize = 'small' | 'medium' | 'large';
export type InputVariant = 'default' | 'filled' | 'outlined';
export type InputType = 'text' | 'email' | 'password' | 'number';
export type InputState = 'default' | 'focused' | 'error' | 'disabled';

@Component({
  selector: 'bio-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {
  // 2. Definir @Input props con valores default
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() type: InputType = 'text';
  @Input() size: InputSize = 'medium';
  @Input() variant: InputVariant = 'default';
  @Input() disabled: boolean = false;
  @Input() prefixIcon: string = '';
  @Input() suffixIcon: string = '';
  @Input() helperText: string = '';
  @Input() errorText: string = '';

  // 3. Definir @Output events
  @Output() valueChange = new EventEmitter<string>();
  @Output() focused = new EventEmitter<FocusEvent>();
  @Output() blurred = new EventEmitter<FocusEvent>();

  // 4. Estado interno
  value: string = '';
  currentState: InputState = 'default';
  isFocused: boolean = false;

  // 5. ControlValueAccessor implementation
  onChange: any = () => {};
  onTouch: any = () => {};

  writeValue(value: string): void {
    this.value = value || '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  // 6. Event handlers
  handleInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.onChange(this.value);
    this.valueChange.emit(this.value);
  }

  handleFocus(event: FocusEvent): void {
    this.isFocused = true;
    this.currentState = 'focused';
    this.onTouch();
    this.focused.emit(event);
  }

  handleBlur(event: FocusEvent): void {
    this.isFocused = false;
    this.currentState = this.errorText ? 'error' : 'default';
    this.blurred.emit(event);
  }

  // 7. Computed classes para el template
  get wrapperClasses(): string[] {
    return [
      'bio-input',
      `bio-input--${this.size}`,
      `bio-input--${this.variant}`,
      `bio-input--${this.currentState}`,
      this.disabled ? 'bio-input--disabled' : '',
      this.errorText ? 'bio-input--error' : ''
    ].filter(Boolean);
  }
}
```

---

## 🏗️ Paso 4: HTML Template (*.component.html)

### Template Base

```html
<div [class]="wrapperClasses.join(' ')">
  <!-- Label (opcional) -->
  <label *ngIf="label" class="bio-input__label" [for]="inputId">
    {{ label }}
  </label>

  <!-- Input Container -->
  <div class="bio-input__container">
    <!-- Prefix Icon (opcional) -->
    <span *ngIf="prefixIcon" class="bio-input__icon bio-input__icon--prefix">
      <span class="material-symbols-rounded">{{ prefixIcon }}</span>
    </span>

    <!-- Input Field -->
    <input
      [id]="inputId"
      [type]="type"
      [value]="value"
      [placeholder]="placeholder"
      [disabled]="disabled"
      class="bio-input__field"
      (input)="handleInput($event)"
      (focus)="handleFocus($event)"
      (blur)="handleBlur($event)"
    />

    <!-- Suffix Icon (opcional) -->
    <span *ngIf="suffixIcon" class="bio-input__icon bio-input__icon--suffix">
      <span class="material-symbols-rounded">{{ suffixIcon }}</span>
    </span>
  </div>

  <!-- Helper Text o Error Text -->
  <div *ngIf="helperText || errorText" class="bio-input__helper">
    <span *ngIf="!errorText" class="bio-input__helper-text">
      {{ helperText }}
    </span>
    <span *ngIf="errorText" class="bio-input__error-text">
      {{ errorText }}
    </span>
  </div>
</div>
```

---

## 🏗️ Paso 5: SCSS Styles (*.component.scss)

### Template Base

```scss
// Usar SOLO tokens semánticos - NUNCA valores hardcoded

.bio-input {
  display: inline-flex;
  flex-direction: column;
  gap: var(--spacing-1);
  font-family: var(--font-primary);
  width: 100%;

  // ========================================
  // LABEL
  // ========================================
  &__label {
    font-size: var(--font-sm);
    font-weight: var(--font-medium);
    color: var(--text-primary);
    margin-bottom: var(--spacing-1);
  }

  // ========================================
  // CONTAINER
  // ========================================
  &__container {
    display: flex;
    align-items: center;
    position: relative;
    gap: var(--spacing-2);
  }

  // ========================================
  // FIELD (el input en sí)
  // ========================================
  &__field {
    flex: 1;
    border: none;
    outline: none;
    background: transparent;
    font-family: var(--font-primary);
    color: var(--text-primary);

    &::placeholder {
      color: var(--text-muted);
    }

    &:disabled {
      color: var(--text-disabled);
      cursor: not-allowed;
    }
  }

  // ========================================
  // ICONS
  // ========================================
  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--icon-default);

    .material-symbols-rounded {
      font-size: 20px;
    }
  }

  // ========================================
  // HELPER & ERROR TEXT
  // ========================================
  &__helper {
    font-size: var(--font-xs);
    margin-top: var(--spacing-1);
  }

  &__helper-text {
    color: var(--text-secondary);
  }

  &__error-text {
    color: var(--error-default);
  }

  // ========================================
  // VARIANTS
  // ========================================

  // Default Variant - Solo borde inferior
  &--default {
    .bio-input__container {
      border-bottom: 1px solid var(--border-default);
      padding-bottom: var(--spacing-1);
    }
  }

  // Filled Variant - Fondo gris
  &--filled {
    .bio-input__container {
      background-color: var(--bg-subtle);
      border: 1px solid transparent;
      padding: var(--spacing-2) var(--spacing-3);
      border-radius: var(--radius-md);
    }
  }

  // Outlined Variant - Borde completo
  &--outlined {
    .bio-input__container {
      border: 1px solid var(--border-default);
      padding: var(--spacing-2) var(--spacing-3);
      border-radius: var(--radius-md);
    }
  }

  // ========================================
  // SIZES
  // ========================================

  &--small {
    .bio-input__field {
      height: 32px;
      font-size: var(--font-sm);
      padding: var(--spacing-1) var(--spacing-2);
    }

    .bio-input__icon .material-symbols-rounded {
      font-size: 16px;
    }
  }

  &--medium {
    .bio-input__field {
      height: 40px;
      font-size: var(--font-base);
      padding: var(--spacing-2) var(--spacing-3);
    }

    .bio-input__icon .material-symbols-rounded {
      font-size: 20px;
    }
  }

  &--large {
    .bio-input__field {
      height: 48px;
      font-size: var(--font-base);
      padding: var(--spacing-3) var(--spacing-4);
    }

    .bio-input__icon .material-symbols-rounded {
      font-size: 24px;
    }
  }

  // ========================================
  // STATES
  // ========================================

  &--focused {
    .bio-input__container {
      border-color: var(--focus-ring);
      box-shadow: 0 0 0 2px var(--focus-ring-offset),
                  0 0 0 4px var(--focus-ring);
    }
  }

  &--error {
    .bio-input__label {
      color: var(--error-default);
    }

    .bio-input__container {
      border-color: var(--error-default);
    }
  }

  &--disabled {
    opacity: 0.5;
    cursor: not-allowed;

    .bio-input__label,
    .bio-input__field {
      cursor: not-allowed;
    }
  }
}
```

---

## 🏗️ Paso 6: Storybook Stories (*.stories.ts)

### Template Base

```typescript
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { InputComponent } from './input.component';
import { CommonModule } from '@angular/common';

const meta: Meta<InputComponent> = {
  title: 'Bioma 2.0/Components/Input',
  component: InputComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, InputComponent],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Etiqueta del input',
    },
    placeholder: {
      control: 'text',
      description: 'Texto placeholder',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number'],
      description: 'Tipo de input HTML',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Tamaño del input',
    },
    variant: {
      control: 'select',
      options: ['default', 'filled', 'outlined'],
      description: 'Variante visual',
    },
    disabled: {
      control: 'boolean',
      description: 'Input deshabilitado',
    },
    prefixIcon: {
      control: 'text',
      description: 'Icono al inicio (Material Symbol name)',
    },
    suffixIcon: {
      control: 'text',
      description: 'Icono al final',
    },
    helperText: {
      control: 'text',
      description: 'Texto de ayuda',
    },
    errorText: {
      control: 'text',
      description: 'Mensaje de error',
    },
  },
};

export default meta;
type Story = StoryObj<InputComponent>;

// 1. Story Default
export const Default: Story = {
  args: {
    label: 'Email',
    placeholder: 'tu@email.com',
    type: 'email',
    size: 'medium',
    variant: 'default',
  },
};

// 2. Stories de Variantes
export const Filled: Story = {
  args: {
    label: 'Nombre completo',
    placeholder: 'Juan Pérez',
    variant: 'filled',
    size: 'medium',
  },
};

export const Outlined: Story = {
  args: {
    label: 'Teléfono',
    placeholder: '+1 (555) 000-0000',
    variant: 'outlined',
    size: 'medium',
  },
};

// 3. Stories de Tamaños
export const Small: Story = {
  args: {
    label: 'Small Input',
    placeholder: 'Small size',
    size: 'small',
    variant: 'outlined',
  },
};

export const Large: Story = {
  args: {
    label: 'Large Input',
    placeholder: 'Large size',
    size: 'large',
    variant: 'outlined',
  },
};

// 4. Stories con Iconos
export const WithPrefixIcon: Story = {
  args: {
    label: 'Buscar',
    placeholder: 'Buscar productos...',
    prefixIcon: 'search',
    variant: 'filled',
  },
};

export const WithSuffixIcon: Story = {
  args: {
    label: 'Contraseña',
    placeholder: 'Ingresa tu contraseña',
    type: 'password',
    suffixIcon: 'visibility',
    variant: 'outlined',
  },
};

// 5. Stories de Estados
export const WithHelperText: Story = {
  args: {
    label: 'Email',
    placeholder: 'tu@email.com',
    helperText: 'Usaremos tu email solo para notificaciones importantes',
    variant: 'outlined',
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    placeholder: 'tu@email.com',
    value: 'email-invalido',
    errorText: 'Por favor ingresa un email válido',
    variant: 'outlined',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Campo deshabilitado',
    placeholder: 'No puedes editar esto',
    disabled: true,
    variant: 'outlined',
  },
};

// 6. Matriz de todas las variantes
export const AllVariants: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 32px; padding: 24px;">
        <div>
          <h3 style="margin-bottom: 16px; font-family: Sora, sans-serif;">Default Variant</h3>
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;">
            <bio-input label="Small" size="small" variant="default" placeholder="Small"></bio-input>
            <bio-input label="Medium" size="medium" variant="default" placeholder="Medium"></bio-input>
            <bio-input label="Large" size="large" variant="default" placeholder="Large"></bio-input>
          </div>
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-family: Sora, sans-serif;">Filled Variant</h3>
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;">
            <bio-input label="Small" size="small" variant="filled" placeholder="Small"></bio-input>
            <bio-input label="Medium" size="medium" variant="filled" placeholder="Medium"></bio-input>
            <bio-input label="Large" size="large" variant="filled" placeholder="Large"></bio-input>
          </div>
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-family: Sora, sans-serif;">Outlined Variant</h3>
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;">
            <bio-input label="Small" size="small" variant="outlined" placeholder="Small"></bio-input>
            <bio-input label="Medium" size="medium" variant="outlined" placeholder="Medium"></bio-input>
            <bio-input label="Large" size="large" variant="outlined" placeholder="Large"></bio-input>
          </div>
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-family: Sora, sans-serif;">With Icons</h3>
          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px;">
            <bio-input label="Search" variant="filled" placeholder="Buscar..." prefixIcon="search"></bio-input>
            <bio-input label="Email" variant="outlined" placeholder="tu@email.com" prefixIcon="mail" suffixIcon="check"></bio-input>
          </div>
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-family: Sora, sans-serif;">States</h3>
          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px;">
            <bio-input label="With Helper" variant="outlined" placeholder="Email" helperText="We'll never share your email"></bio-input>
            <bio-input label="With Error" variant="outlined" value="invalid" errorText="Invalid email format"></bio-input>
          </div>
        </div>
      </div>
    `,
  }),
};

// 7. Playground Interactivo
export const Playground: Story = {
  args: {
    label: 'Playground Input',
    placeholder: 'Type something...',
    type: 'text',
    size: 'medium',
    variant: 'outlined',
    disabled: false,
    prefixIcon: '',
    suffixIcon: '',
    helperText: '',
    errorText: '',
  },
};
```

---

## ✅ Checklist Final

Antes de considerar el componente completo, verifica:

### Código
- [ ] Component TypeScript con types estrictos
- [ ] HTML template limpio y semántico
- [ ] SCSS usa SOLO tokens semánticos (cero hardcoded)
- [ ] Storybook stories (mínimo 8-10 stories)
- [ ] Nombres de clases siguen BEM modificado

### Funcionalidad
- [ ] Props con valores default sensatos
- [ ] Event emitters funcionando
- [ ] Estados interactivos (hover, focus, etc.)
- [ ] Variantes visuales todas implementadas
- [ ] Tamaños todos implementados

### Accesibilidad
- [ ] Labels asociados correctamente
- [ ] Keyboard navigation funciona
- [ ] Focus visible
- [ ] Contrast ratios WCAG AA
- [ ] ARIA attributes si aplica

### Documentación
- [ ] ArgTypes en Storybook descritos
- [ ] Story "AllVariants" muestra matriz completa
- [ ] Story "Playground" permite experimentar
- [ ] Props comentadas en código

### Testing
- [ ] Build compila sin errores
- [ ] Storybook muestra sin warnings
- [ ] Visual regression OK
- [ ] Responsive behavior OK

---

## 🚀 Comandos para Verificar

```bash
# 1. Verificar que compila
npm run build

# 2. Ver el componente en Storybook
npm run storybook

# 3. (Opcional) Ejecutar tests
npm test
```

---

## 💡 Tips y Mejores Prácticas

### ✅ Hacer (DO)
- Usar tokens semánticos SIEMPRE
- Definir types TypeScript estrictos
- Crear múltiples stories variadas
- Usar standalone components
- Seguir nomenclatura BEM
- Comentar código complejo
- Soportar modo oscuro automático

### ❌ No Hacer (DON'T)
- Valores hardcoded en SCSS
- Props sin types
- Story único básico
- NgModules en lugar de standalone
- Clases CSS inconsistentes
- Código sin comentarios
- Ignorar accesibilidad

---

## 📚 Referencias Útiles

- **Button Component**: `/src/app/components/button/` - Ejemplo completo
- **Tokens**: `/src/styles/tokens.scss` - Todos los tokens disponibles
- **Foundations**: `/src/documentation/foundations/Foundations.mdx` - Documentación
- **Material Symbols**: https://fonts.google.com/icons - Para iconos

---

_Esta plantilla se basa en el Button component ya implementado en Bioma 2.0._

# 🎯 Estado del Proyecto Bioma 2.0 Design System

**Fecha actualización:** 11 de Febrero, 2026
**Versión:** 0.1.0
**Status:** ✅ Fundación + Primer Componente Completado

---

## 📊 Resumen Ejecutivo

El proyecto Bioma 2.0 Design System está en su fase inicial con la fundación completa y el primer componente funcional implementado siguiendo los principios de Atomic Design.

---

## ✅ Completado

### 1. Infraestructura Técnica ✓

- ✅ Angular 21.1 configurado con standalone components
- ✅ Storybook 10.1 para documentación interactiva
- ✅ Bootstrap 5.3.3 integrado
- ✅ TypeScript con configuración escalable
- ✅ SCSS con arquitectura modular
- ✅ Material Symbols Rounded para iconografía

### 2. Sistema de Tokens Completo ✓

**Archivo:** `/src/styles/tokens.scss`

#### Tokens Foundation (Nivel 1 - Primitivos)
- ✅ **Paleta Neutral**: 13 escalas (#FAFAFA → #121212)
- ✅ **Paleta Brand**: 11 escalas del rojo Bioma (#FFEDED → #45000A)
- ✅ **Spacing**: 11 valores (0px → 64px)
- ✅ **Border Radius**: 8 valores (0px → 9999px)
- ✅ **Shadows**: 5 niveles (xs → xl)
- ✅ **Typography**: Font families, sizes, weights, line heights

#### Tokens Semánticos (Nivel 2 - Contextuales)
- ✅ **Text Colors**: 8 tokens semánticos
- ✅ **Background Colors**: 5 tokens
- ✅ **Border Colors**: 4 tokens
- ✅ **Primary Action**: 6 tokens (basados en brand red)
- ✅ **Secondary Action**: 5 tokens
- ✅ **Tertiary Action**: 3 tokens
- ✅ **Status Colors**: Success, Warning, Error, Info (4 tokens cada uno)
- ✅ **Icon Colors**: 4 tokens
- ✅ **Focus States**: 2 tokens
- ✅ **Z-Index Scale**: 8 niveles
- ✅ **Transitions**: 3 velocidades + 3 easing functions

#### Modo Oscuro
- ✅ Sistema de overrides con `[data-theme="dark"]`
- ✅ Tokens adaptativos para textos, backgrounds, borders
- ✅ Mantiene accesibilidad de contraste

### 3. Documentación Unificada ✓

**Archivo:** `/src/documentation/foundations/Foundations.mdx`

Estructura organizada siguiendo Atomic Design:

- ✅ **Level 1: Primitivos (Atoms)**
  - Color Primitives
  - Typography Primitives
  - Spacing, Radius, Shadows

- ✅ **Level 2: Semánticos (Molecules)**
  - Text, Background, Border Colors
  - Primary Action Tokens
  - Status Colors
  - Icon Colors

- ✅ **Level 3: Sistemas Estructurales (Organisms)**
  - Grid & Layout
  - Iconography

### 4. Componentes de Utilidad ✓

#### TokenDocComponent
**Propósito:** Renderiza filas individuales de tokens en tablas

**Características:**
- Soporte para múltiples tipos de tokens (color, spacing, typography, radius, shadow, semantic)
- Visualización de muestras de color (48x32px)
- Display de valores en hex, RGB
- Descripción de uso
- Soporte para Light/Dark mode values

#### TokenTableComponent
**Propósito:** Contenedor de tablas completas de tokens

**Características:**
- Acepta array de tokens
- Título opcional
- Prefijo configurable
- Toggle para columna de muestras

### 5. Primer Componente: Button ✓

**Archivos:**
- `button.component.ts` (96 líneas)
- `button.component.html` (14 líneas)
- `button.component.scss` (201 líneas)
- `button.stories.ts` (252 líneas)

#### Anatomía del Componente
```
button
├── left-icon (opcional)
│   └── material-symbols-rounded
├── label (texto)
└── right-icon (opcional)
    └── material-symbols-rounded
```

#### Props (TypeScript)
```typescript
@Input() label: string = 'Button'
@Input() size: ButtonSize = 'large'          // 'small' | 'medium' | 'large'
@Input() variant: ButtonVariant = 'filled'   // 'filled' | 'outlined' | 'flat' | 'link'
@Input() disabled: boolean = false
@Input() fullWidth: boolean = false
@Input() iconStart: boolean = false
@Input() iconEnd: boolean = false
@Input() iconStartName: string = 'add'
@Input() iconEndName: string = 'arrow_forward'
@Output() clicked = new EventEmitter<MouseEvent>()
```

#### Variantes Implementadas

**4 Variants × 3 Sizes × 5 States = 60 Combinaciones**

**Variants:**
1. **Filled** - Acción primaria (fondo brand red, texto blanco)
2. **Outlined** - Acción secundaria (borde, fondo transparente)
3. **Flat** - Acción terciaria (sin borde, fondo transparente)
4. **Link** - Acción de enlace (texto coloreado, sin fondo/borde)

**Sizes:**
- **Small**: 32px altura, padding 8px/16px, font 14px, border-radius 6px
- **Medium**: 40px altura, padding 10px/20px, font 14px, border-radius 8px
- **Large**: 48px altura, padding 12px/24px, font 16px, border-radius 8px

**States:**
- Default
- Hovered (cambio de background/border)
- Active (más oscuro que hover)
- Disabled (gris, cursor not-allowed)
- Focused (ring outline brand red)

#### Soporte de Iconos
- Material Symbols Rounded
- Posiciones: iconStart, iconEnd, o ambos
- Tamaños adaptativos según size del botón
- Gap configurable entre icono y texto

#### Uso de Tokens Semánticos
El componente usa **SOLO tokens semánticos**, nunca valores hardcoded:

```scss
// ✅ Correcto - Usa tokens semánticos
background-color: var(--primary-default, #E30038);
color: var(--primary-strong, #FFFFFF);
padding: var(--spacing-3, 12px) var(--spacing-6, 24px);
border-radius: var(--radius-md, 8px);

// ❌ Incorrecto - Valores hardcoded
background-color: #E30038;
padding: 12px 24px;
```

### 6. Storybook Stories ✓

**Button Stories (12 Stories):**
1. Default
2. Filled
3. Outlined
4. Flat
5. Link
6. Large
7. Medium
8. Small
9. WithIconStart
10. WithIconEnd
11. WithBothIcons
12. Disabled
13. FullWidth
14. **AllVariants** (matriz completa de todas las combinaciones)
15. **Playground** (interactivo con todos los controles)

**Token Stories (4 Stories):**
1. NeutralPalette (13 tokens)
2. BrandPalette (11 tokens)
3. SemanticTextTokens (8 tokens)
4. SpacingScale (11 tokens)

---

## 🎨 Arquitectura de Tokens

### Nomenclatura

**En Documentación:**
```
text/primary
brand/500
spacing-4
```

**En CSS:**
```css
var(--text-primary)
var(--brand-500)
var(--spacing-4)
```

**Referencias en Tokens:**
```
{brand/500}    → referencia a otro token
#E30038        → valor absoluto
```

### Flujo de Tokens

```
Foundation Tokens (Primitivos)
       ↓
Semantic Tokens (Contextuales)
       ↓
Component Styles
       ↓
Rendered UI
```

**Ejemplo:**
```
--brand-500: #E30038                    (Foundation)
       ↓
--primary-default: var(--brand-500)     (Semantic)
       ↓
.bio-button--filled {                   (Component)
  background: var(--primary-default);
}
```

---

## 🚀 Próximos Pasos Sugeridos

### Fase 2: Componentes Básicos (Atoms)

#### Priority 1 - Controles de Formulario
1. **Input** - Campo de texto
   - Variants: default, filled, outlined
   - States: default, focused, error, disabled
   - Sizes: small, medium, large
   - Support: placeholder, prefix/suffix icons, helper text

2. **Checkbox** - Selección múltiple
   - States: unchecked, checked, indeterminate, disabled
   - Sizes: small, medium

3. **Radio** - Selección única
   - States: unchecked, checked, disabled
   - Sizes: small, medium

4. **Toggle/Switch** - Activación on/off
   - States: off, on, disabled
   - Sizes: small, medium

#### Priority 2 - Elementos de Feedback
5. **Badge** - Etiquetas y contadores
   - Variants: filled, outlined, dot
   - Colors: brand, success, warning, error, info, neutral
   - Sizes: small, medium

6. **Tag/Chip** - Etiquetas removibles
   - Variants: filled, outlined
   - Removable: with close icon
   - Sizes: small, medium

#### Priority 3 - Tipografía y Contenido
7. **Heading** - Títulos jerárquicos
   - Levels: h1, h2, h3, h4, h5, h6
   - Weights: regular, medium, semibold, bold

8. **Text/Paragraph** - Texto de cuerpo
   - Sizes: xs, sm, base, lg, xl
   - Weights: light, regular, medium, semibold

9. **Link** - Enlaces
   - Variants: inline, standalone
   - States: default, hover, visited
   - With icon support

10. **Divider** - Separadores
    - Orientations: horizontal, vertical
    - Variants: solid, dashed
    - With label support

### Fase 3: Componentes Compuestos (Molecules)

11. **Select/Dropdown** - Selección de opciones
12. **Textarea** - Texto multilínea
13. **Card** - Contenedor de contenido
14. **Alert** - Mensajes de sistema
15. **Toast/Notification** - Mensajes temporales
16. **Tooltip** - Información contextual
17. **Breadcrumb** - Navegación jerárquica
18. **Pagination** - Navegación de páginas

### Fase 4: Componentes Complejos (Organisms)

19. **Modal/Dialog** - Ventanas modales
20. **Navigation Bar** - Barra de navegación
21. **Table** - Tablas de datos
22. **Tabs** - Pestañas de contenido
23. **Accordion** - Contenido colapsable
24. **Form** - Formularios completos
25. **Menu/Dropdown Menu** - Menús contextuales

---

## 📦 Cómo Usar el Sistema Actual

### 1. Ver Storybook Localmente

```bash
cd /sessions/gallant-wizardly-ride/mnt/mader/BIO/bioma-design-system
npm run storybook
```

Abre: `http://localhost:6006`

### 2. Usar el Button Component en tu App

```typescript
// app.component.ts
import { ButtonComponent } from './components/button/button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <bio-button
      label="Click Me"
      variant="filled"
      size="large"
      [iconStart]="true"
      iconStartName="add"
      (clicked)="handleClick()">
    </bio-button>
  `
})
export class AppComponent {
  handleClick() {
    console.log('Button clicked!');
  }
}
```

### 3. Consumir Tokens en un Nuevo Componente

```scss
.my-component {
  // ✅ Usa tokens semánticos
  color: var(--text-primary);
  background-color: var(--bg-default);
  padding: var(--spacing-4);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-md);

  // ✅ Usa transitions predefinidas
  transition: background-color var(--transition-fast);

  &:hover {
    background-color: var(--bg-subtle);
  }
}
```

---

## 🔧 Comandos Útiles

```bash
# Desarrollo
npm start                    # Inicia app de desarrollo
npm run storybook            # Inicia Storybook

# Build
npm run build                # Compila para producción
npm run build-storybook      # Compila Storybook estático

# Testing
npm test                     # Ejecuta tests unitarios
npm run test:watch           # Tests en modo watch

# Linting
npm run lint                 # Ejecuta linter
```

---

## 📚 Estructura de Archivos

```
bioma-design-system/
├── src/
│   ├── app/
│   │   └── components/
│   │       ├── button/                    ✅ Completado
│   │       │   ├── button.component.ts
│   │       │   ├── button.component.html
│   │       │   ├── button.component.scss
│   │       │   └── button.stories.ts
│   │       ├── token-doc/                 ✅ Completado
│   │       │   ├── token-doc.component.ts
│   │       │   ├── token-doc.component.html
│   │       │   └── token-doc.component.scss
│   │       └── token-table/               ✅ Completado
│   │           ├── token-table.component.ts
│   │           ├── token-table.component.html
│   │           ├── token-table.component.scss
│   │           └── token-table.stories.ts
│   ├── documentation/
│   │   └── foundations/
│   │       └── Foundations.mdx            ✅ Completado
│   ├── styles/
│   │   └── tokens.scss                    ✅ Completado
│   └── styles.scss                        ✅ Completado
├── .storybook/
│   ├── main.ts
│   └── preview.ts
├── package.json
├── tsconfig.json
├── angular.json
└── README.md
```

---

## 🎓 Aprendizajes y Mejores Prácticas

### 1. Tokens Semánticos > Valores Hardcoded
**Siempre usar tokens semánticos en lugar de valores directos.**

❌ Mal:
```scss
background-color: #E30038;
padding: 12px 24px;
```

✅ Bien:
```scss
background-color: var(--primary-default);
padding: var(--spacing-3) var(--spacing-6);
```

**Beneficios:**
- Theming automático (Light/Dark mode)
- Consistencia visual
- Mantenimiento centralizado
- Escalabilidad

### 2. Componentes Standalone de Angular
**Usar standalone components para mejor tree-shaking y modularidad.**

```typescript
@Component({
  selector: 'bio-button',
  standalone: true,              // ✅
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
```

### 3. TypeScript Types para Props
**Definir types estrictos para todas las props del componente.**

```typescript
export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonVariant = 'filled' | 'outlined' | 'flat' | 'link';

@Input() size: ButtonSize = 'large';        // ✅ Type-safe
@Input() variant: ButtonVariant = 'filled'; // ✅ Type-safe
```

### 4. Stories Completas en Storybook
**Crear múltiples stories para cada componente:**
- Individual stories para cada variante
- Matriz completa (AllVariants)
- Playground interactivo

### 5. Estructura BEM Modificada
**Usar nomenclatura clara y consistente:**

```scss
.bio-button                      // Block
  .bio-button__icon-container    // Element
  .bio-button__label             // Element
  .bio-button--filled            // Modifier (variant)
  .bio-button--large             // Modifier (size)
  .bio-button--hovered           // Modifier (state)
```

---

## ⚠️ Consideraciones Importantes

### Accesibilidad
- ✅ Ratios de contraste WCAG AA cumplidos
- ⚠️ Pendiente: ARIA labels en componentes complejos
- ⚠️ Pendiente: Keyboard navigation completa
- ⚠️ Pendiente: Screen reader testing

### Performance
- ✅ Standalone components = mejor tree-shaking
- ✅ CSS custom properties = re-renders eficientes
- ⚠️ Pendiente: Lazy loading de componentes
- ⚠️ Pendiente: Bundle size optimization

### Testing
- ⚠️ Pendiente: Unit tests (Jest)
- ⚠️ Pendiente: Component tests (Testing Library)
- ⚠️ Pendiente: Visual regression tests
- ⚠️ Pendiente: Accessibility tests (axe)

### Documentación
- ✅ Foundations completamente documentadas
- ✅ Button component con 15 stories
- ⚠️ Pendiente: Usage guidelines
- ⚠️ Pendiente: Design principles
- ⚠️ Pendiente: Contribution guide

---

## 📈 Métricas del Proyecto

### Tamaño del Build
- **Main bundle**: 122.03 kB (36.17 kB gzipped)
- **Styles**: 9.54 kB (1.81 kB gzipped)
- **Total**: 131.57 kB (37.98 kB gzipped)

### Tokens Definidos
- **Foundation tokens**: 68 tokens
- **Semantic tokens**: 47 tokens
- **Typography tokens**: 21 tokens
- **Z-index scale**: 8 niveles
- **Transition tokens**: 6 tokens
- **Total**: 150 tokens

### Componentes
- **Componentes de utilidad**: 2 (TokenDoc, TokenTable)
- **Componentes UI**: 1 (Button)
- **Stories**: 19 stories totales

---

## 🎯 Roadmap Visual

```
✅ COMPLETADO
├── Infraestructura (Angular + Storybook + TypeScript)
├── Sistema de Tokens (Foundation + Semantic + Dark Mode)
├── Documentación Foundations
├── Componentes de Utilidad (TokenDoc, TokenTable)
└── Button Component (primer componente UI)

🚧 EN PROGRESO
└── (Ninguno actualmente)

📋 PRÓXIMO (Fase 2)
├── Input Component
├── Checkbox Component
├── Radio Component
├── Toggle Component
└── Badge Component

🔮 FUTURO (Fase 3+)
└── Componentes Molecules y Organisms
```

---

## 💡 Recomendaciones para Continuar

### Para el siguiente componente (Input):

1. **Revisar el Button como referencia**
   - Estructura de archivos
   - Uso de tokens
   - Storybook stories
   - TypeScript types

2. **Seguir el mismo patrón:**
   ```
   component/
   ├── input.component.ts      (TypeScript + types)
   ├── input.component.html    (Template limpio)
   ├── input.component.scss    (Solo tokens semánticos)
   └── input.stories.ts        (Múltiples stories)
   ```

3. **Definir primero:**
   - Anatomía (partes del componente)
   - Props necesarias (tipos TypeScript)
   - Variantes visuales
   - Estados interactivos
   - Tokens semánticos a usar

4. **Crear incrementalmente:**
   - Estructura básica primero
   - Luego variantes
   - Después estados
   - Finalmente refinamiento

---

## 🤝 Contribución

El sistema está diseñado para ser escalable y mantenible. Cada nuevo componente debe:

1. ✅ Usar SOLO tokens semánticos (nunca hardcoded)
2. ✅ Ser standalone component de Angular
3. ✅ Tener TypeScript types estrictos
4. ✅ Incluir múltiples Storybook stories
5. ✅ Seguir nomenclatura BEM consistente
6. ✅ Soportar modo oscuro automáticamente
7. ✅ Cumplir WCAG AA de contraste
8. ✅ Ser responsive por defecto

---

## 📞 Contacto y Soporte

**Proyecto:** Bioma 2.0 Design System
**Status:** MVP - Foundation + First Component
**Última actualización:** Febrero 11, 2026

---

_Este documento se actualiza con cada milestone completado._

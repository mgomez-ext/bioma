# Color Palette Component

Componente visual e interactivo para documentar paletas de colores en el sistema de diseño de Bioma.

## Características

### 🎨 Visual e Interactivo
- Muestra colores en formato visual atractivo
- Click en cualquier color para ver detalles completos
- Animaciones suaves y transiciones

### 📋 Copiable
- Copia valores HEX, RGB, HSL con un solo click
- Confirmación visual al copiar
- Selección de texto mejorada

### 📱 Responsive
- Se adapta a diferentes tamaños de pantalla
- Optimizado para móviles y tablets
- Layout adaptativo

### 🎯 Tres Layouts

1. **Horizontal** (Default)
   - Paletas secuenciales en fila
   - Ideal para gradientes de color
   - Expansion al hover

2. **Vertical**
   - Paletas apiladas
   - Compacto para listas cortas
   - Bueno para comparación

3. **Grid**
   - Distribución en cuadrícula
   - Flexible y escalable
   - Perfecto para paletas semánticas

### ♿ Accesible
- Contraste automático (texto claro/oscuro)
- Navegación por teclado
- Roles ARIA apropiados

## Uso

### Básico

```typescript
import { ColorPaletteComponent, ColorPalette } from './color-palette.component';

const brandPalette: ColorPalette = {
  name: 'Brand Palette',
  description: 'Colores principales de marca',
  tokens: [
    {
      name: '500',
      value: '--brand-500',
      hex: '#E30038',
      rgb: 'rgb(227, 0, 56)',
      hsl: 'hsl(345, 100%, 45%)',
      usage: 'Color principal de marca',
      contrast: 'light',
    },
    // ... más tokens
  ],
};
```

```html
<app-color-palette
  [palette]="brandPalette"
  prefix="brand-"
  layout="horizontal"
  [showDetails]="true"
  [copyable]="true">
</app-color-palette>
```

### Propiedades

| Propiedad | Tipo | Default | Descripción |
|-----------|------|---------|-------------|
| `palette` | `ColorPalette` | **required** | Objeto de paleta con tokens |
| `prefix` | `string` | `''` | Prefijo para nombres de tokens |
| `layout` | `'horizontal' \| 'vertical' \| 'grid'` | `'horizontal'` | Layout de visualización |
| `showDetails` | `boolean` | `true` | Mostrar detalles al hacer click |
| `copyable` | `boolean` | `true` | Permitir copiar valores |

### Interfaces

```typescript
interface ColorToken {
  name: string;           // Nombre del token (ej: '500', 'default')
  value: string;          // Nombre de variable CSS (ej: '--brand-500')
  hex: string;            // Valor hexadecimal (ej: '#E30038')
  rgb?: string;           // Valor RGB (ej: 'rgb(227, 0, 56)')
  hsl?: string;           // Valor HSL (ej: 'hsl(345, 100%, 45%)')
  usage?: string;         // Descripción de uso
  contrast?: 'light' | 'dark'; // Contraste de texto
}

interface ColorPalette {
  name: string;           // Nombre de la paleta
  description?: string;   // Descripción opcional
  tokens: ColorToken[];   // Array de tokens de color
  type?: 'sequential' | 'semantic'; // Tipo de paleta
}
```

## Ejemplos

### Paleta Secuencial (Brand)

```typescript
const brandPalette: ColorPalette = {
  name: 'Brand Palette',
  description: 'Escala completa de Bioma Red',
  type: 'sequential',
  tokens: [
    { name: '50', hex: '#FFEDED', contrast: 'dark', ... },
    { name: '100', hex: '#FFD1D4', contrast: 'dark', ... },
    // ... 50 a 950
  ],
};
```

### Paleta Semántica (Estados)

```typescript
const successPalette: ColorPalette = {
  name: 'Success Colors',
  description: 'Estados de éxito',
  type: 'semantic',
  tokens: [
    { name: 'subtle', hex: '#D1FAE5', usage: 'Fondos', ... },
    { name: 'default', hex: '#10B981', usage: 'Principal', ... },
    { name: 'hover', hex: '#059669', usage: 'Hover', ... },
    { name: 'strong', hex: '#065F46', usage: 'Texto', ... },
  ],
};
```

### Layout Grid (Recomendado para Semánticas)

```html
<app-color-palette
  [palette]="successPalette"
  prefix="success-"
  layout="grid">
</app-color-palette>
```

### Layout Horizontal (Recomendado para Secuenciales)

```html
<app-color-palette
  [palette]="brandPalette"
  prefix="brand-"
  layout="horizontal">
</app-color-palette>
```

## Comportamiento

### Interacción
1. **Hover**: El color se eleva ligeramente
2. **Click**: Muestra panel de detalles con valores copiables
3. **Click en valor**: Copia al portapapeles
4. **Click afuera**: Cierra el panel de detalles

### Estados Visuales
- **Normal**: Color plano con label
- **Hover**: Elevación y sombra
- **Selected**: Borde azul y escala aumentada
- **Copied**: Animación de pulso + mensaje de confirmación

### Responsive
- **Desktop**: Layout original
- **Tablet**: Layouts se adaptan
- **Mobile**:
  - Horizontal → Vertical
  - Detalles en modal centrado
  - Grid con menos columnas

## Personalización

### Colores de Contraste

El componente calcula automáticamente si usar texto claro u oscuro:

```typescript
const token: ColorToken = {
  // ...
  contrast: 'light', // Usa texto blanco
  // o
  contrast: 'dark',  // Usa texto oscuro
};
```

### Prefijos Personalizados

```html
<!-- Sin prefijo -->
<app-color-palette [palette]="palette" prefix="">
<!-- Resultado: "500" -->

<!-- Con prefijo -->
<app-color-palette [palette]="palette" prefix="brand-">
<!-- Resultado: "brand-500" -->

<!-- Con prefijo de variable CSS -->
<app-color-palette [palette]="palette" prefix="--brand-">
<!-- Resultado: "--brand-500" -->
```

## Mejores Prácticas

### ✅ Hacer

- Usar layout `horizontal` para paletas secuenciales (50-950)
- Usar layout `grid` para paletas semánticas (default, hover, etc.)
- Incluir valores RGB y HSL para flexibilidad
- Proporcionar descripciones de uso claras
- Marcar el token principal con ⭐ en la descripción

### ❌ Evitar

- Mezclar tokens secuenciales y semánticos en la misma paleta
- Omitir el contraste (el texto puede ser ilegible)
- Usar nombres inconsistentes
- Paletas con más de 15 colores en grid
- Descripciones largas (usar tooltips si es necesario)

## Casos de Uso

### Documentación de Design System
```html
<h2>Paletas de Color</h2>
<app-color-palette [palette]="brandPalette" layout="horizontal"></app-color-palette>
<app-color-palette [palette]="neutralPalette" layout="horizontal"></app-color-palette>
```

### Guía de Implementación
```html
<h3>Estados de Botones</h3>
<app-color-palette [palette]="primaryActionsPalette" layout="vertical"></app-color-palette>
```

### Referencia Rápida
```html
<div class="color-reference">
  <app-color-palette [palette]="successPalette" layout="grid"></app-color-palette>
  <app-color-palette [palette]="warningPalette" layout="grid"></app-color-palette>
  <app-color-palette [palette]="errorPalette" layout="grid"></app-color-palette>
</div>
```

## Accesibilidad

- Usa `role="button"` en swatches clickeables
- Incluye texto descriptivo para screen readers
- Contraste automático WCAG AA compliant
- Navegación por teclado soportada
- Focus visible en elementos interactivos

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

**Nota**: Usa Clipboard API moderna. Fallback manual si no está disponible.

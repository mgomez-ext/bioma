# 📚 Reorganización de Storybook - Resumen de Cambios

## ✅ Cambios Realizados

### 1. **Foundations - Nuevas Stories con TokenTable**

Se crearon stories organizadas para cada categoría de foundations usando el componente `TokenTable`:

#### **Color** (`src/documentation/foundations/color/color-tokens.stories.ts`)
- ✅ Paleta Neutral (13 tokens)
- ✅ Paleta Brand - Rojo Bioma (11 tokens)
- ✅ Tokens Semánticos - Text (8 tokens)
- ✅ Tokens Semánticos - Background (5 tokens)
- ✅ Tokens Semánticos - Border (4 tokens)
- ✅ Tokens Semánticos - Primary Action (6 tokens)

#### **Typography** (`src/documentation/foundations/typography/typography-tokens.stories.ts`)
- ✅ Familias de Fuentes (2 tokens)
- ✅ Tamaños de Fuente (9 tokens)
- ✅ Pesos de Fuente (5 tokens)
- ✅ Alturas de Línea (6 tokens)
- ✅ Espaciado de Letras (3 tokens)

#### **Spacing** (`src/documentation/foundations/spacing/spacing-tokens.stories.ts`)
- ✅ Escala de Espaciado (12 tokens)
- ✅ Visualización interactiva de espacios

#### **Shadows** (`src/documentation/foundations/elevation/shadow-tokens.stories.ts`)
- ✅ Sombras de Elevación (5 tokens: xs, sm, md, lg, xl)
- ✅ Visualización interactiva de sombras

#### **Border Radius** (`src/documentation/foundations/border/radius-tokens.stories.ts`)
- ✅ Border Radius (8 tokens: none, xs, sm, md, lg, xl, 2xl, full)
- ✅ Visualización interactiva de border radius

### 2. **Reorganización de Componentes**

#### **Componentes Visibles**
- ✅ **Button** - `Bioma 2.0/Components/Button`
  - Mantiene todas sus variantes, tamaños y estados

#### **Iconography**
- ✅ **IconFont** - Movido de `Foundation/IconFont` a `Bioma 2.0/Foundations/Iconography`
  - Mantiene todos los tamaños, tipos (rounded/filled) y colores

### 3. **Componentes Internos Ocultados**

Estos componentes ahora están bajo `_Internal/` para que no aparezcan en la navegación principal:

- ✅ **TokenDoc** - `_Internal/TokenDoc`
- ✅ **TokenTable** - `_Internal/TokenTable`

## 📁 Nueva Estructura de Navegación

```
Bioma 2.0/
├── Foundations/
│   ├── Color
│   │   ├── Neutral Palette
│   │   ├── Brand Palette
│   │   ├── Semantic Text
│   │   ├── Semantic Background
│   │   ├── Semantic Border
│   │   └── Semantic Primary
│   ├── Typography
│   │   ├── Font Families
│   │   ├── Font Sizes
│   │   ├── Font Weights
│   │   ├── Line Heights
│   │   └── Letter Spacing
│   ├── Spacing
│   │   ├── Spacing Scale
│   │   └── Spacing Visual
│   ├── Shadows
│   │   ├── Shadows
│   │   └── Shadows Visual
│   ├── Border Radius
│   │   ├── Border Radius
│   │   └── Radius Visual
│   └── Iconography
│       ├── Default
│       ├── Rounded / Filled
│       ├── Sizes (16-48px)
│       ├── Colors
│       └── Common Icons
│
└── Components/
    └── Button
        ├── Default
        ├── Variantes (Filled, Outlined, Flat, Link)
        ├── Tamaños (Small, Medium, Large)
        ├── Con Íconos
        ├── Estados
        └── All Variants

_Internal/ (oculto)
├── TokenDoc
└── TokenTable
```

## 🎯 Características Implementadas

### Uso de TokenTable
- ✅ Todas las categorías de foundations usan `TokenTableComponent`
- ✅ Prefijos automáticos para nombres de tokens
- ✅ Visualización de muestras (colores, sombras, radius)
- ✅ Información de uso para cada token
- ✅ Soporte para tokens semánticos con light/dark mode

### Visualizaciones Interactivas
- ✅ Espaciado: Barras visuales con medidas
- ✅ Sombras: Cards con diferentes elevaciones
- ✅ Border Radius: Cuadros con diferentes esquinas

## 📝 Notas Importantes

### IconButton
❗ **No se encontró un componente `IconButton` separado**. El componente `Button` ya incluye soporte para íconos mediante las props:
- `iconStart` / `iconStartName`
- `iconEnd` / `iconEndName`

Si necesitas un componente IconButton dedicado (solo ícono, sin texto), puedes solicitarlo.

### Tokens Disponibles
Todos los tokens están definidos en `/src/styles/tokens.scss` e incluyen:
- ✅ Foundation Tokens (primitivos)
- ✅ Semantic Tokens (contextuales)
- ✅ Dark Mode overrides
- ✅ Typography tokens
- ✅ Z-index scale
- ✅ Transition tokens

## 🚀 Próximos Pasos

1. **Ejecutar Storybook**:
   ```bash
   npm run storybook
   ```

2. **Build para producción**:
   ```bash
   npm run build-storybook
   ```

3. **Verificar en el navegador**:
   - Navegar a las diferentes categorías de Foundations
   - Verificar que los tokens se muestran correctamente con TokenTable
   - Confirmar que solo Button aparece en Components

## 💡 Uso de TokenTable en Nuevas Stories

Si necesitas agregar más categorías de tokens, usa este patrón:

```typescript
import { Meta, StoryObj } from '@storybook/angular';
import { TokenTableComponent } from '../../../app/components/token-table/token-table.component';
import { Token } from '../../../app/components/token-doc/token-doc.component';

const meta: Meta<TokenTableComponent> = {
  title: 'Bioma 2.0/Foundations/TuCategoria',
  component: TokenTableComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<TokenTableComponent>;

const tusTokens: Token[] = [
  { 
    name: 'token-name', 
    value: 'token-value', 
    usage: 'Descripción de uso', 
    type: 'color' | 'spacing' | 'typography' | 'shadow' | 'radius' | 'semantic' 
  },
];

export const TuStory: Story = {
  args: {
    tokens: tusTokens,
    title: '🎨 Tu Título',
    prefix: 'tu-prefix/',
    showSampleColumn: true, // para mostrar preview visual
  },
};
```

---

**Fecha**: 2026-02-12
**Sistema**: Bioma Design System 2.0
**Framework**: Angular + Storybook

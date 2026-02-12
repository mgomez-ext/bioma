# 🎨 Personalización de Storybook - Bioma 2.0

## Resumen
Se ha personalizado completamente Storybook para usar el tema dark de Bioma y la tipografía Sora en toda la interfaz.

---

## 📁 Archivos Creados/Modificados

### 1. `.storybook/bioma-theme.ts` (NUEVO)
**Propósito:** Tema programático de Storybook usando los colores de Bioma

**Configuración:**
- Base: Dark theme
- Tipografía principal: Sora
- Tipografía código: SF Mono
- Colores primarios: Bioma Red (#E30038)
- Backgrounds: neutral/950 (#121212)
- Borders: neutral/700 (#404040)
- Text colors: neutral/100 (#F5F5F2)

**Tokens de Bioma usados:**
```typescript
{
  colorPrimary: '#E30038',        // brand/500
  appBg: '#121212',               // neutral/950
  appContentBg: '#262626',        // neutral/900
  textColor: '#F5F5F2',           // neutral/100
  barBg: '#262626',               // neutral/900
  inputBg: '#30302E',             // neutral/800
}
```

---

### 2. `.storybook/storybook-custom.css` (NUEVO)
**Propósito:** Estilos CSS personalizados que aplican el tema Bioma a toda la UI de Storybook

**Incluye:**

#### Tipografía Global
- Font family: 'Sora' en toda la interfaz
- Font code: 'SF Mono' en bloques de código

#### Dark Mode
- Background principal: #121212 (neutral/950)
- Sidebar: #262626 (neutral/900)
- Panels: #262626 (neutral/900)
- Text: #F5F5F2 (neutral/100)

#### Componentes Estilizados
- ✅ Sidebar y navegación
- ✅ Toolbar
- ✅ Docs pages
- ✅ Headings (h1-h6)
- ✅ Párrafos y listas
- ✅ Code blocks (inline y bloques)
- ✅ Tablas
- ✅ Links (color brand red)
- ✅ Controls panel (ArgTypes)
- ✅ Input controls
- ✅ Buttons
- ✅ Scrollbars personalizadas
- ✅ Badges y tags
- ✅ Tooltips
- ✅ Search bar
- ✅ Canvas toolbar
- ✅ Addons panel

#### Accesibilidad
- Contraste WCAG AA preservado
- Focus visible con outline brand red
- Hover states con transiciones suaves

---

### 3. `.storybook/preview.ts` (MODIFICADO)
**Propósito:** Configuración global de preview con tema Bioma

**Cambios principales:**

#### Imports
```typescript
import biomaTheme from './bioma-theme';
import '../src/styles.scss';          // Tokens globales
import './storybook-custom.css';      // Estilos custom
```

#### Theme en Docs
```typescript
docs: {
  theme: biomaTheme,
}
```

#### Backgrounds
```typescript
backgrounds: {
  default: 'dark',
  values: [
    { name: 'dark', value: '#121212' },      // neutral/950
    { name: 'light', value: '#FFFFFF' },     // white
    { name: 'neutral-900', value: '#262626' },
    { name: 'neutral-50', value: '#FAFAFA' },
  ],
}
```

#### Global Decorator
Aplica `data-theme="dark"` a cada story automáticamente:
```typescript
decorators: [
  (story) => {
    const wrapper = document.createElement('div');
    wrapper.setAttribute('data-theme', 'dark');
    wrapper.style.fontFamily = '"Sora", sans-serif';
    wrapper.style.backgroundColor = 'var(--bg-default, #121212)';
    wrapper.style.color = 'var(--text-primary, #F5F5F2)';
    // ... más estilos
    return wrapper;
  },
]
```

#### Global Types (Toolbar)
Toggle de tema Light/Dark en toolbar:
```typescript
globalTypes: {
  theme: {
    name: 'Theme',
    defaultValue: 'dark',
    toolbar: {
      items: [
        { value: 'light', title: 'Light', icon: 'sun' },
        { value: 'dark', title: 'Dark', icon: 'moon' },
      ],
    },
  },
}
```

#### Viewports
Configurados para Mobile, Tablet, Desktop

#### Story Sort
Orden personalizado:
1. Bioma 2.0
   - Introduction
   - Foundation (IconFont, Typography, Colors, Spacing, Tokens)
   - Components (Button, Input, Checkbox, Radio)
   - Patterns
   - Templates

---

## 🎨 Paleta de Colores Aplicada

### Backgrounds
| Uso | Color | Hex | Token |
|-----|-------|-----|-------|
| Principal | Dark | #121212 | neutral/950 |
| Contenido | Medium Dark | #262626 | neutral/900 |
| Inputs | Darker | #30302E | neutral/800 |

### Text
| Uso | Color | Hex | Token |
|-----|-------|-----|-------|
| Principal | Light | #F5F5F2 | neutral/100 |
| Secundario | Gray | #E3E3E3 | neutral/200 |
| Muted | Medium Gray | #969696 | neutral/400 |

### Brand & Accents
| Uso | Color | Hex | Token |
|-----|-------|-----|-------|
| Primary | Bioma Red | #E30038 | brand/500 |
| Hover | Dark Red | #C40030 | brand/600 |
| Links | Bioma Red | #E30038 | brand/500 |
| Code Inline | Light Red | #FFA3AB | brand/200 |

### Borders
| Uso | Color | Hex | Token |
|-----|-------|-----|-------|
| Default | Gray | #404040 | neutral/700 |
| Input | Medium Gray | #575454 | neutral/600 |

---

## 🚀 Cómo Usar

### Ver Storybook con Tema Personalizado
```bash
npm run storybook
```

Abre `http://localhost:6006` y verás:
- ✅ Interfaz completamente dark
- ✅ Tipografía Sora en toda la UI
- ✅ Colores de Bioma en sidebar, toolbar, docs
- ✅ Background #121212 (neutral/950)
- ✅ Textos en #F5F5F2 (neutral/100)
- ✅ Acentos en #E30038 (brand red)

### Toggle Light/Dark Mode
En la toolbar superior, encontrarás un control para cambiar entre:
- 🌙 Dark (default)
- ☀️ Light

### Cambiar Background del Canvas
En la toolbar, usa el selector de backgrounds para:
- Dark (#121212) - Default
- Light (#FFFFFF)
- neutral-900 (#262626)
- neutral-50 (#FAFAFA)

---

## 📐 Responsive Viewports

Configurados en la toolbar:
- 📱 Mobile: 375x667px
- 📱 Tablet: 768x1024px
- 💻 Desktop: 1440x900px

---

## 🎯 Features Implementados

### ✅ Tipografía
- Sora en toda la interfaz
- SF Mono en código
- Pesos: 300, 400, 500, 600, 700

### ✅ Color System
- Dark mode por defecto
- Light mode disponible
- Todos los colores usan tokens de Bioma
- Contraste WCAG AA cumplido

### ✅ UI Components
- Sidebar con hover states
- Toolbar con colores Bioma
- Docs pages estilizadas
- Tables con alternating rows
- Code blocks con syntax highlighting
- Forms con focus states
- Buttons con estados hover/active
- Scrollbars personalizadas

### ✅ Accessibility
- Focus visible
- Keyboard navigation
- ARIA labels preservados
- Contraste suficiente

### ✅ Performance
- CSS minificado
- Fonts cargadas con display=swap
- Transiciones con hardware acceleration

---

## 🔧 Personalización Adicional

### Agregar Logo de Bioma
Edita `.storybook/bioma-theme.ts`:
```typescript
brandImage: '/path/to/bioma-logo.svg',
```

### Cambiar URL del Brand
```typescript
brandUrl: 'https://tu-dominio.com',
```

### Modificar Colores
Todos los colores están en `.storybook/bioma-theme.ts` y `.storybook/storybook-custom.css`

### Cambiar Font
Edita en `bioma-theme.ts`:
```typescript
fontBase: '"Tu-Font", sans-serif',
```

---

## 📊 Comparación Antes/Después

### Antes (Storybook Default)
- ❌ Tema claro genérico
- ❌ Tipografía default de Storybook
- ❌ Colores azul/gris estándar
- ❌ Sin identidad de marca

### Después (Bioma Customizado)
- ✅ Tema dark de Bioma (#121212)
- ✅ Tipografía Sora en toda la UI
- ✅ Colores brand red (#E30038)
- ✅ Identidad Bioma completa
- ✅ Tokens CSS consistentes
- ✅ Modo oscuro por defecto

---

## 🐛 Troubleshooting

### Storybook no muestra el tema
**Solución:** Limpia cache y rebuild
```bash
rm -rf node_modules/.cache
npm run storybook
```

### Tipografía Sora no se carga
**Verificar:** Conexión a Google Fonts
Los imports están en:
- `.storybook/storybook-custom.css`
- `src/styles.scss`

### Tema no se aplica a mis componentes
**Verificar:** Que los componentes usen tokens CSS:
```scss
background-color: var(--bg-default);
color: var(--text-primary);
```

### Build de Storybook falla
**Verificar:** Versión de Storybook
```bash
npm list storybook
# Debe ser 10.x
```

---

## 📚 Archivos de Configuración

```
.storybook/
├── main.ts                   # Configuración principal
├── preview.ts                # Preview config + decorators (MODIFICADO)
├── bioma-theme.ts           # Tema programático (NUEVO)
└── storybook-custom.css     # Estilos CSS custom (NUEVO)
```

---

## 🎉 Resultado Final

Storybook ahora luce completamente branded con:
- 🎨 Tema dark de Bioma (#121212)
- ✍️ Tipografía Sora professional
- ❤️ Brand red (#E30038) como acento
- 📐 Tokens CSS consistentes
- 🌙 Dark mode por defecto
- ☀️ Light mode opcional
- ♿ Accesibilidad preservada
- 📱 Responsive viewports
- 🚀 Performance optimizado

---

## 🔗 Referencias

- Tokens CSS: `/src/styles/tokens.scss`
- Documentación Bioma: `/src/documentation/foundations/Foundations.mdx`
- Button Component: `/src/app/components/button/`
- IconFont Component: `/src/app/components/icon-font/`

---

_Personalización completada: 11 de Febrero, 2026_
_Storybook Version: 10.2.8_
_Theme: Bioma 2.0 Dark_

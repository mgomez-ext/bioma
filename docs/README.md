# 📚 Documentación Técnica - Bioma Design System

Esta carpeta contiene toda la documentación técnica, guías de desarrollo y templates del proyecto.

---

## 📂 Estructura

```
docs/
├── README.md                   # Este archivo (índice general)
├── guides/                     # Guías de desarrollo y sesiones
├── templates/                  # Templates para componentes y código
└── setup/                      # Configuración de herramientas
```

---

## 🗂️ Contenido

### 📖 Guías de Desarrollo (`/guides`)

| Archivo | Descripción | Estado |
|---------|-------------|--------|
| `STORYBOOK-CUSTOMIZATION.md` | Guía de personalización de Storybook | ✅ Actualizada |
| `STORYBOOK_REORGANIZATION.md` | Plan de reorganización de Storybook | ✅ Completada |
| `SESSION-SUMMARY.md` | Resumen de sesiones de desarrollo | 📝 Referencia |
| `NEW-STRUCTURE.md` | Propuesta de nueva estructura | 📝 Referencia |

### 📝 Templates (`/templates`)

| Archivo | Descripción | Uso |
|---------|-------------|-----|
| `COMPONENT-TEMPLATE.md` | Template para crear nuevos componentes | 🔧 Referencia obligatoria |

### ⚙️ Setup (`/setup`)

| Archivo | Descripción | Estado |
|---------|-------------|--------|
| `CHROMATIC_SETUP.md` | Configuración de Chromatic para visual regression testing | ✅ Configurado |

---

## 📄 Documentación en Raíz del Proyecto

Los siguientes archivos permanecen en la raíz por su importancia y convención:

- `README.md` - Documentación principal del proyecto
- `CHANGELOG.md` - Historial de cambios y versiones
- `LICENSE` - Licencia del proyecto
- `STATUS.md` - Estado actual del desarrollo
- `CLEANUP-REPORT.md` - Reporte de limpieza y organización

---

## 🎯 Guías Rápidas

### Para Nuevos Desarrolladores
1. Lee el `README.md` principal
2. Revisa el `STATUS.md` para entender el estado actual
3. Consulta `templates/COMPONENT-TEMPLATE.md` antes de crear componentes
4. Familiarízate con `guides/STORYBOOK-CUSTOMIZATION.md` para documentación

### Para Contribuidores
1. Sigue la estructura definida en `COMPONENT-TEMPLATE.md`
2. Actualiza el `CHANGELOG.md` con cada cambio significativo
3. Documenta configuraciones nuevas en `/setup`
4. Mantén las guías actualizadas

### Para Mantenedores
1. Revisa periódicamente el `STATUS.md`
2. Actualiza el `CLEANUP-REPORT.md` después de reorganizaciones
3. Consolida documentación redundante
4. Archiva sesiones antiguas cuando sea necesario

---

## 🔄 Mantenimiento de Documentación

### Reglas
- ✅ Mantén un solo archivo por tema
- ✅ Usa nombres descriptivos y consistentes
- ✅ Fecha las actualizaciones importantes
- ✅ Archiva documentación obsoleta (crea `/archive` si es necesario)
- ❌ NO dupliques información
- ❌ NO dejes documentación contradictoria

### Actualización
- Revisa y actualiza documentación cada sprint
- Consolida archivos similares
- Elimina referencias a código que ya no existe
- Mantén sincronizados los ejemplos de código

---

## 📌 Notas Importantes

### Archivos de Sesión
Los archivos `SESSION-SUMMARY.md` y `NEW-STRUCTURE.md` son **referencias históricas** que documentan decisiones de diseño tomadas durante el desarrollo inicial. No deben usarse como fuente de verdad del estado actual (usa `STATUS.md` para eso).

### Templates vs Guías
- **Templates** (`/templates`): Estructuras base para copiar y rellenar
- **Guías** (`/guides`): Documentos explicativos y mejores prácticas
- **Setup** (`/setup`): Configuraciones de herramientas externas

---

## 🚀 Próximos Pasos

1. [ ] Crear `CONTRIBUTING.md` en raíz
2. [ ] Consolidar `STORYBOOK-CUSTOMIZATION.md` y `STORYBOOK_REORGANIZATION.md`
3. [ ] Crear guía de arquitectura del sistema
4. [ ] Documentar flujo de publicación a npm
5. [ ] Crear guía de testing

---

**Última actualización:** 14 de Febrero, 2026
**Mantenedor:** Equipo Bioma

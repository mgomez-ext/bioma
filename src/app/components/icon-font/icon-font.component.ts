import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * IconFont Component - Material Symbols Icon System
 *
 * Renderiza iconos de Material Symbols con control de tamaño y estilo.
 * Basado en especificación Figma de Bioma 2.0.
 */

// Types para las props del componente
export type IconSize = '16' | '20' | '24' | '32' | '40' | '48';
export type IconType = 'rounded' | 'filled';

@Component({
  selector: 'bio-icon-font',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon-font.component.html',
  styleUrls: ['./icon-font.component.scss']
})
export class IconFontComponent {
  /**
   * Nombre del icono de Material Symbols
   * @example 'home', 'add', 'arrow_forward', 'search'
   */
  @Input() iconName: string = 'home';

  /**
   * Tamaño del icono en pixels
   * @default '16'
   */
  @Input() size: IconSize = '16';

  /**
   * Estilo del icono: rounded (outline) o filled (solid)
   * @default 'rounded'
   */
  @Input() type: IconType = 'rounded';

  /**
   * Color del icono usando tokens semánticos
   * @default 'default' (usa --icon-default token)
   * 'inherit' = hereda del padre (ej: cuando está dentro de un botón)
   */
  @Input() color: 'default' | 'primary' | 'inverse' | 'subtle' | 'inherit' = 'default';

  /**
   * Genera las clases CSS dinámicas para el componente
   */
  get iconClasses(): string[] {
    const baseClass = 'bio-icon-font';
    const typeClass = this.type === 'filled' ? 'material-symbols-rounded-filled' : 'material-symbols-rounded';

    return [
      baseClass,
      typeClass,
      `${baseClass}--size-${this.size}`,
      ...(this.color !== 'inherit' ? [`${baseClass}--color-${this.color}`] : [])
    ];
  }

  /**
   * Obtiene el font-size en pixels según el tamaño configurado
   */
  get fontSize(): string {
    return `${this.size}px`;
  }
}

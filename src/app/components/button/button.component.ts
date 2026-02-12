import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconFontComponent } from '../icon-font/icon-font.component';

export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonVariant = 'filled' | 'outlined' | 'flat' | 'link';
export type ButtonState = 'default' | 'hovered' | 'active' | 'disabled' | 'focused';

/**
 * Button Component - Bioma 2.0 Design System
 *
 * Botón configurable con múltiples variantes, tamaños y estados.
 * Soporta íconos al inicio y final, y todos los estados interactivos.
 *
 * @example
 * ```html
 * <!-- Button básico -->
 * <bio-button label="Click me"></bio-button>
 *
 * <!-- Button con ícono -->
 * <bio-button
 *   label="Agregar"
 *   [iconStart]="true"
 *   (click)="handleClick()">
 * </bio-button>
 *
 * <!-- Button outlined small -->
 * <bio-button
 *   label="Cancelar"
 *   variant="outlined"
 *   size="small">
 * </bio-button>
 * ```
 */
@Component({
  selector: 'bio-button',
  standalone: true,
  imports: [CommonModule, IconFontComponent],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  /**
   * Texto del botón
   */
  @Input() label: string = 'Button';

  /**
   * Tamaño del botón
   * - small: 40px altura
   * - medium: 48px altura (default)
   * - large: 56px altura
   */
  @Input() size: ButtonSize = 'large';

  /**
   * Variante visual del botón
   * - filled: Fondo sólido de marca (default)
   * - outlined: Solo borde
   * - flat: Sin borde
   * - link: Estilo de enlace
   */
  @Input() variant: ButtonVariant = 'filled';

  /**
   * Estado del botón (normalmente manejado automáticamente)
   */
  @Input() state: ButtonState = 'default';

  /**
   * Muestra ícono al inicio del botón
   */
  @Input() iconStart: boolean = false;

  /**
   * Muestra ícono al final del botón
   */
  @Input() iconEnd: boolean = false;

  /**
   * Nombre del ícono Material Symbols para iconStart
   */
  @Input() iconStartName: string = 'add';

  /**
   * Nombre del ícono Material Symbols para iconEnd
   */
  @Input() iconEndName: string = 'keyboard_arrow_down';

  /**
   * Deshabilita el botón
   */
  @Input() disabled: boolean = false;

  /**
   * Botón ocupa todo el ancho disponible
   */
  @Input() fullWidth: boolean = false;

  /**
   * Tipo de botón HTML
   */
  @Input() type: 'button' | 'submit' | 'reset' = 'button';

  /**
   * Evento de click
   */
  @Output() clicked = new EventEmitter<MouseEvent>();

  /**
   * Clases CSS dinámicas basadas en props.
   * El estado se maneja via CSS (:hover, :active, :focus-visible) excepto
   * cuando se pasa explícitamente para Storybook/demos.
   */
  get buttonClasses(): string[] {
    const classes = [
      'bio-button',
      `bio-button--${this.size}`,
      `bio-button--${this.variant}`,
      this.fullWidth ? 'bio-button--full-width' : '',
      this.disabled ? 'bio-button--disabled' : ''
    ];

    // Estado forzado para Storybook (cuando se pasa explícitamente)
    if (this.state && this.state !== 'default') {
      classes.push(`bio-button--${this.state}`);
    }

    return classes.filter(Boolean);
  }

  /**
   * Manejador de click
   */
  handleClick(event: MouseEvent): void {
    if (!this.disabled) {
      this.clicked.emit(event);
    }
  }
}

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Token {
  name: string;
  value: string;
  hex?: string;
  rgb?: string;
  usage?: string;
  lightMode?: string;
  darkMode?: string;
  type?: 'color' | 'spacing' | 'typography' | 'radius' | 'shadow' | 'semantic';
}

@Component({
  selector: 'app-token-doc',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './token-doc.component.html',
  styleUrls: ['./token-doc.component.scss']
})
export class TokenDocComponent {
  @Input() token!: Token;
  @Input() rowIndex: number = 0;
  @Input() prefix: string = '';

  get isEven(): boolean {
    return this.rowIndex % 2 === 0;
  }

  get displayValue(): string {
    if (this.token.hex) return this.token.hex;
    if (this.token.value) return this.token.value;
    return '';
  }

  get showColorSample(): boolean {
    return this.token.type === 'color' || !!this.token.hex;
  }

  get colorValue(): string {
    return this.token.hex || this.token.value || '';
  }
}

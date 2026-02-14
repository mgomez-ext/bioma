import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ColorToken {
  name: string;
  value: string;
  hex: string;
  rgb?: string;
  hsl?: string;
  usage?: string;
  contrast?: 'light' | 'dark';
}

export interface ColorPalette {
  name: string;
  description?: string;
  tokens: ColorToken[];
  type?: 'sequential' | 'semantic';
}

@Component({
  selector: 'app-color-palette',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './color-palette.component.html',
  styleUrls: ['./color-palette.component.scss']
})
export class ColorPaletteComponent {
  @Input() palette!: ColorPalette;
  @Input() prefix: string = '';
  @Input() layout: 'grid' | 'horizontal' | 'vertical' = 'horizontal';
  @Input() showDetails: boolean = true;
  @Input() copyable: boolean = true;

  selectedToken: ColorToken | null = null;
  copiedToken: string | null = null;

  selectToken(token: ColorToken): void {
    this.selectedToken = this.selectedToken === token ? null : token;
  }

  async copyToClipboard(value: string, token: ColorToken): Promise<void> {
    if (!this.copyable) return;

    try {
      await navigator.clipboard.writeText(value);
      this.copiedToken = token.name;
      setTimeout(() => {
        this.copiedToken = null;
      }, 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  }

  isCopied(token: ColorToken): boolean {
    return this.copiedToken === token.name;
  }

  getContrastClass(token: ColorToken): string {
    return token.contrast === 'light' ? 'text-light' : 'text-dark';
  }

  getTokenName(token: ColorToken): string {
    return this.prefix ? `${this.prefix}${token.name}` : token.name;
  }
}

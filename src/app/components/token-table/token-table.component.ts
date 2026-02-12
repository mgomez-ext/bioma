import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TokenDocComponent, Token } from '../token-doc/token-doc.component';

@Component({
  selector: 'app-token-table',
  standalone: true,
  imports: [CommonModule, TokenDocComponent],
  templateUrl: './token-table.component.html',
  styleUrls: ['./token-table.component.scss']
})
export class TokenTableComponent {
  @Input() tokens: Token[] = [];
  @Input() title?: string;
  @Input() prefix: string = '';
  @Input() showSampleColumn: boolean = true;
}

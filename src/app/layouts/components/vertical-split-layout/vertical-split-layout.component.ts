import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'nm-vertical-split-layout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vertical-split-layout.component.html',
  styleUrl: './vertical-split-layout.component.css'
})
export class VerticalSplitLayoutComponent {
  @Input() title!: string;
  @Input() subtitle!: string;
}

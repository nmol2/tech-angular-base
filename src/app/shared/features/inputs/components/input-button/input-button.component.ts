import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'nm-input-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-button.component.html',
  styleUrl: './input-button.component.css'
})
export class InputButtonComponent {
  @Input() label: string = '';

}

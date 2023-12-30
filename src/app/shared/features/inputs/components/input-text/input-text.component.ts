import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractInputComponent } from '../input/abstract-input.component';
import { ControlContainer, ReactiveFormsModule } from '@angular/forms';
import { InputLabelComponent } from '../input-label/input-label.component';

@Component({
  selector: 'nm-input-text',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputLabelComponent,
  ],
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, {skipSelf: true})
    }
  ],
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.css'
})
export class InputTextComponent extends AbstractInputComponent {

}

import { Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlContainer, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AbstractInputComponent } from '../input/abstract-input.component';
import { InputLabelComponent } from '../input-label/input-label.component';

@Component({
  selector: 'nm-input-password',
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
  templateUrl: './input-password.component.html',
  styleUrl: './input-password.component.css'
})
export class InputPasswordComponent extends AbstractInputComponent implements OnInit, OnDestroy {
  // @Input() controlName!: string;
  // parentContainer = inject(ControlContainer);
  // get parentFormGroup() {
  //   return this.parentContainer.control as FormGroup;
  // }
  // ngOnInit(): void {
  //   this.parentFormGroup.addControl(
  //     this.controlName,
  //     new FormControl('', [Validators.required])
  //   )
  // }
  // ngOnDestroy(): void {
  //   this.parentFormGroup.removeControl(this.controlName);
  // }
}

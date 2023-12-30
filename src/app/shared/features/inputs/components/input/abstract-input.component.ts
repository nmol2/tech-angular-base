import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, booleanAttribute, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlContainer, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'nm-abstract-input',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, {skipSelf: true})
    }
  ],
  template: ``,
})
export class AbstractInputComponent implements OnInit, OnDestroy, OnChanges {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input({ required: true }) controlName!: string;
  @Input({ transform: booleanAttribute }) required!: boolean;
  private parentContainer = inject(ControlContainer);
  get parentFormGroup() {
    return this.parentContainer.control as FormGroup;
  }
  ngOnChanges(changes: SimpleChanges): void {
  }
  ngOnInit(): void {
    this.parentFormGroup.addControl(
      this.controlName,
      new FormControl('', this.required?[Validators.required]:[])
    )
  }
  ngOnDestroy(): void {
    this.parentFormGroup.removeControl(this.controlName);
  }
}

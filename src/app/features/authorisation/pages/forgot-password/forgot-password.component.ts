import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerticalSplitLayoutComponent } from '../../../../layouts/components/vertical-split-layout/vertical-split-layout.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputTextComponent } from '../../../../shared/features/inputs/components/input-text/input-text.component';
import { InputPasswordComponent } from '../../../../shared/features/inputs/components/input-password/input-password.component';
import { InputButtonComponent } from '../../../../shared/features/inputs/components/input-button/input-button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'nm-forgot-password',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VerticalSplitLayoutComponent,
    InputTextComponent,
    InputPasswordComponent,
    InputButtonComponent,
    RouterLink,
  ],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {
  form!: FormGroup;
  constructor(){
    this.form = new FormGroup({});
  }
  handleFormSubmit(form: FormGroup){
    console.log(this.form.value, this.form.valid);
  }
}

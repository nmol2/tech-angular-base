import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerticalSplitLayoutComponent } from '../../../../layouts/components/vertical-split-layout/vertical-split-layout.component';
import { RouterLink } from '@angular/router';
import { InputTextComponent } from '../../../../shared/features/inputs/components/input-text/input-text.component';
import { InputPasswordComponent } from '../../../../shared/features/inputs/components/input-password/input-password.component';
import { InputButtonComponent } from '../../../../shared/features/inputs/components/input-button/input-button.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'nm-login',
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
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  form!: FormGroup;
  constructor(){
    this.form = new FormGroup({});
  }
  handleFormSubmit(form: FormGroup){
    console.log(this.form.value, this.form.valid);
  }
}

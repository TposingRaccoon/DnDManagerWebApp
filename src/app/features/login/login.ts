import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  nav = inject(Router)
  auth = inject(AuthService)
   
   fg = inject(FormBuilder).group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
   })

   onSubmit() {
  if (this.fg.valid) {
    // const { Username, Password } = this.fg.value;
    // this.auth.login({ username: Username??'', password: Password??'' }).subscribe(() => {
    //   this.nav.navigate(['/list']);
    // });
    this.auth.login(this.fg.value)
    this.nav.navigate(['/list']);
    }
  }
  register(){
    this.nav.navigate(['/register']);
  }

}

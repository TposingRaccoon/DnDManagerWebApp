import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';

@Component({
  selector: 'app-register',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  nav = inject(Router)
  auth = inject(AuthService)
   
   fg = inject(FormBuilder).group({
    Username: ['', [Validators.required]],
    Password: ['', [Validators.required]],
    Password2: ['', [Validators.required]]
   })

   onSubmit() {
  if (this.fg.valid) {
    // const { Username, Password } = this.fg.value;
    // this.auth.register({ username: Username??'', password: Password??'' }).subscribe(() => {
    //   this.nav.navigate(['/login']);
    // });
    this.nav.navigate(['/login'])
  }
}

  logIn(){
    this.nav.navigate(['/login']);
  }

}

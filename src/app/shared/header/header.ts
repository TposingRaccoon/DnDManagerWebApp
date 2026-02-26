import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Link } from '../models/link';
import { AuthService } from '../../core/auth/auth.service';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  isLoggedIn = false;

  liens = [
    { name: 'Create', url: ['/creation'], isVisible: true },
    { name: 'Manage', url: ['/list'], isVisible: true }
  ];

  authService = inject(AuthService)
  test = localStorage.getItem('TOKEN')

  ngOnInit() {
    this.authService.token$.subscribe(token => {
      this.isLoggedIn = !!token;
      console.log();
      
      this.updateVisibility();
    });
  }

  updateVisibility() {
    this.liens.find(l => l.name === 'Log In')!.isVisible = !this.isLoggedIn;
  }

  logout() {
    this.authService.logout();
  }
}
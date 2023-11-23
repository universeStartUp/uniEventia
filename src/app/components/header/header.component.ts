import { Component } from '@angular/core';
import { IUser } from 'src/app/auth/interfaces/auth.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  openDropdown: boolean = false;
  user: IUser = JSON.parse(localStorage.getItem('user') || '{}');

  constructor(private router: Router) { }

  // New method to check if the token is valid
  isValidToken(): boolean {
    const expiricy = parseInt(localStorage.getItem('tokenExpiricy')!, 10);
    if (isNaN(expiricy)) {
      console.error('Invalid token expiry time');
      // Handle the error, e.g., by treating the token as expired
    }
    const tokenExpiry = new Date(expiricy).getTime();
    const currentTime = new Date().getTime();
    console.log(tokenExpiry);
    console.log(currentTime);
    console.log(currentTime < tokenExpiry);
    return currentTime < tokenExpiry;
  }

  // Method to determine if the user exists based on the valid token
  getUserExists(): boolean {
    return this.isValidToken();
  }

  setDropdown() {
    this.openDropdown = !this.openDropdown;
  }

  dropdownOptions = ['Inicio', 'Eventos', 'Foro'];

  goToLogin() {
    this.router.navigate(['/auth/login']);
  }

  goToRegister() {
    this.router.navigate(['/auth/register']);
  }

  goToEventos() {
    this.router.navigate(['/events/all']);
  }

  goToInicio() {
    this.router.navigate(['/']);
  }
}

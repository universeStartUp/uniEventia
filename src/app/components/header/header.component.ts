import { Component} from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { heroBars3 } from '@ng-icons/heroicons/outline';
import { IUser } from 'src/app/auth/interfaces/auth.interface';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  providers: [provideIcons({ heroBars3 })],
})
export class HeaderComponent {
  openDropdown: boolean = false;
  user : IUser = JSON.parse(localStorage.getItem('user') || '{}');
  userExists = localStorage.getItem('user') ? true : false;

  constructor(private router : Router) {}

  setDropdown() {
    this.openDropdown = !this.openDropdown;
  }

  dropdownOptions = [ 'Inicio', 'Eventos', 'Foro'];

  goToLogin() {
    this.router.navigate(['/auth/login']);
  }

  goToRegister() {
    this.router.navigate(['/auth/register']);
  }

  goToEventos(){
    this.router.navigate(['/events/all']);
  }

  goToInicio(){
    this.router.navigate(['/']);
  }
}

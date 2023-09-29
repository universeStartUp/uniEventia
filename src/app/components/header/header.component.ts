import { Component } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { heroBars3 } from '@ng-icons/heroicons/outline';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  providers: [provideIcons({ heroBars3 })],
})
export class HeaderComponent {
  openDropdown: boolean = false;

  setDropdown() {
    this.openDropdown = !this.openDropdown;
  }

  dropdownOptions = [ 'Inicio', 'Eventos', 'Foro'];
  
}

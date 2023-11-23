import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header/header.component';
import { NgIconComponent } from '@ng-icons/core';

@NgModule({
  declarations: [
    HeaderComponent // Declare HeaderComponent
  ],
  imports: [
    CommonModule,
    NgIconComponent
  ],
  exports: [
    HeaderComponent // Export HeaderComponent so it can be used in other modules
  ]
})
export class SharedModule { }

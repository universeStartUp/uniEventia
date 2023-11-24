import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentUpdateFormComponent } from './components/student-update-form/student-update-form.component';
import { StudentConfigurationComponent } from './components/student-configuration/student-configuration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    StudentUpdateFormComponent,
    StudentConfigurationComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    ReactiveFormsModule,
    MatSnackBarModule,
  ]
})
export class StudentModule { }

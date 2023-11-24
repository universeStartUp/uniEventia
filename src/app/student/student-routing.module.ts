import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentConfigurationComponent } from './components/student-configuration/student-configuration.component';
import { StudentUpdateFormComponent } from './components/student-update-form/student-update-form.component';

const routes: Routes = [
  { path: 'config', component: StudentUpdateFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }

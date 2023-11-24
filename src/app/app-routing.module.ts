// app-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component'; // Import HomePageComponent

const routes: Routes = [
  // Add route for HomePageComponent
  { path: '', component: HomePageComponent, pathMatch: 'full' },
  // Set up the 'auth' path to lazy load the AuthModule
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'events',
    loadChildren: () => import('./events/event.module').then(m => m.EventModule)
  },
  {
    path: 'student',
    loadChildren: () => import('./student/student.module').then(m => m.StudentModule)
  },
  // ... other routes, if any
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

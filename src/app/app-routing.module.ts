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
  // ... other routes, if any
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

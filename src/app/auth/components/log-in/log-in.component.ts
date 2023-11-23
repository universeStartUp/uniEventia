import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ILogInCredentials } from '../../interfaces/auth.interface'; // Assume you have this interface defined
//import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
//import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
})
export class LogInComponent implements OnInit {
  loginForm!: FormGroup;
  errorMessage: string = '';

  constructor(
    private authService: AuthService, 
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private router : Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      emailAddress: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  onSubmit() {
    this.markAllAsTouched(this.loginForm);

    if (this.loginForm.valid) {
      const payload: ILogInCredentials = this.loginForm.value;
      this.authService
      .login(payload)
      .subscribe({
        next: (response) => {   
          localStorage.setItem('token', response.token);
          localStorage.setItem('user', JSON.stringify(response.userDto));
          this.router.navigate(['/']);
        },
        error: (error) => {
          // Handle error
          console.error('Registration failed')//', error);
          this.snackBar.open("Ingreso un correo o contraseña incorrecta.", 'Cerrar', {
            duration: 2000,
            panelClass: 'snackbar-error',
          });
        }
      });
    } else {
      // Handle form errors
      console.error('Form is not valid');
      this.snackBar.open("El correo o contraseña tienen una sintaxis incorrecta", 'Cerrar', {
        duration: 2000,
        panelClass: 'snackbar-error',
      });
    }
  }

  private markAllAsTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
    });
  }
}

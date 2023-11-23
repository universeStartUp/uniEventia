import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ILogInCredentials } from '../../interfaces/auth.interface'; // Assume you have this interface defined
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
})
export class LogInComponent implements OnInit {
  loginForm!: FormGroup;
  errorMessage: string = '';

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) { }

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
      this.authService.login(payload).subscribe({
        next: (response) => {
          localStorage.setItem('token', response.token);
          localStorage.setItem('user', JSON.stringify(response.userDto));
          this.router.navigate(['/']);
        },
        error: (error) => {
          this.errorMessage = 'Email or password are incorrect';
          console.error('Login failed', error);
        }
      });
    } else {
      // Handle form errors
      console.error('Form is not valid');
    }
  }

  private markAllAsTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
    });
  }
}

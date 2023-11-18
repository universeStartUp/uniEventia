import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { IRegisterPayload } from '../../interfaces/auth.interface'; // Assume you have this interface defined
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})

export class RegisterComponent implements OnInit {
  registerForm!: FormGroup; // Use the non-null assertion operator

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router : Router) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      surname: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      studentCode: ['', Validators.required],
      emailAddress: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    this.markAllAsTouched(this.registerForm);

    if (this.registerForm.valid) {
      const payload: IRegisterPayload = this.registerForm.value;
      this.authService.register(payload).subscribe({
        next: (response) => {   
          this.router.navigate(['/']);
        },
        error: (error) => {
          // Handle error
          console.error('Registration failed', error);
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

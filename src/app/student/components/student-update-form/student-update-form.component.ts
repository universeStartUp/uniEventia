import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StudentService } from '../../services/student.service';
import { StudentUpdate } from '../../interfaces/student-update';

@Component({
  selector: 'app-student-update-form',
  templateUrl: './student-update-form.component.html',
  styleUrls: ['./student-update-form.component.css']
})
export class StudentUpdateFormComponent implements OnInit {
  updateForm: FormGroup;
  errorMessage: string = '';
  constructor(
    private studentService: StudentService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.updateForm = this.formBuilder.group({
      emailAddress: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  ngOnInit(): void {
    if (!localStorage.getItem('token')) {
      this.router.navigate(['/auth/login']);
    }
  }

  onSubmit(): void {
    if (this.updateForm.invalid) {
      console.error('Form is not valid');
      this.snackBar.open('Ingreso datos en un formato invalido ${} ', 'Cerrar', {
        duration: 5000,
        panelClass: 'snackbar-error',
      });
      return
    }
    const payload: StudentUpdate = this.updateForm.value;
    this.studentService
      .updateStudent(payload)
      .subscribe({
        next: (response) => {
          this.snackBar.open("La actualización se realizo con éxito.", 'Cerrar', {
            duration: 2000,
            panelClass: 'snackbar-error',
          });
        },
        error: (error) => {
          console.error('Update failed');
          this.snackBar.open("La actualización de datos falló.\n${ error }", 'Cerrar', {
            duration: 2000,
            panelClass: 'snackbar-error',
          });
        }
      });
  }
}

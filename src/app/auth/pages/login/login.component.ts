import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private router = inject(Router);
  private fb              = inject( FormBuilder );
  
  public myForm: FormGroup = this.fb.group({
    emial: ['', [ Validators.required, Validators.minLength(2) ]],
    password: ['', [ Validators.required ]],
  });
  
  submit() {  
    this.router.navigateByUrl('/autenticacion/dashboard');
  }
}

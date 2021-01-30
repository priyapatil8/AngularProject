
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {AuthService} from 'src/app/services/auth.service';

/* 
 * @param form
*/

function passwordsMatchValidator(form) {

  const password = form.get('password')
  const confirmPassword = form.get('confirmPassword')

  if (password.value !== confirmPassword.value) {

    confirmPassword.setErrors({ passwordsMatch: true })

  } else {

    confirmPassword.setErrors(null)
  }
  return null;
}
/*
 * If the data is valid return null else return an Object
*/
function symbolValidator(control) { // control= registerForm.get('password')
  if (control.hasError('required')) return null;
  if (control.hasError('minLength')) return null;
  if (control.value.indexOf('@') > -1) {
    return null;
  } else {
    return { symbol: true }

  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  registerUserData ={}
  constructor(private builder: FormBuilder,
               private auth: AuthService) { }

  ngOnInit() {
    this.buildForm();

  }
  registerUser(){
  this.auth.registerUser(this.registerUserData)
  .subscribe(
    resp=> console.log(resp),
    err=>console.log(err)
    
    )
  
  }



  buildForm() {
    this.registerForm = this.builder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, symbolValidator, Validators.minLength(4)]],
      confirmPassword: ''
    }, {

      validators: passwordsMatchValidator

    })


  }
  register() {
    console.log(this.registerForm.value);
  }

}

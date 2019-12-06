import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;

  constructor(public fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.myForm = this.fb.group({user: ["", Validators.required]})
  }

  public errorHandling = (control: string, error: string) => {
    return this.myForm.controls[control].hasError(error);
  };

  onSubmit() {
    console.log(this.myForm.value);
    this.router.navigate(['/chat']);
  }

}

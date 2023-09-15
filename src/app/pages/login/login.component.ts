import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // form = {
  //   password:  '',
  //   username: ''
  // }
  form = this.fb.nonNullable.group({
    userName: ['', [Validators.required, Validators.pattern(/^(admin|user)$/)]],
    password: ['', [Validators.required, Validators.pattern(/^(ng\-alain\.com)$/)]],
    remember: [true]
  });
  constructor(
     private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

  showResponse() {
    console.log(1);
  }

  submit() {}
}

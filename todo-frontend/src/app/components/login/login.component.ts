import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private _fb : FormBuilder) {
  this.loginForm = this._fb.group({
      username : [''],
      password : ['']
    })
   }

  ngOnInit(): void {
  }

  onLogin(){
    console.log(this.loginForm.get('username')?.value);
  }

}

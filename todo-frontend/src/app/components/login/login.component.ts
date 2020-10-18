import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BasicAuthenticationService } from '../services/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private _fb : FormBuilder, private basicAuthService: BasicAuthenticationService) {
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

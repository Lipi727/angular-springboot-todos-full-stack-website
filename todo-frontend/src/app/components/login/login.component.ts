import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errorInvaildUserMessage="Invaild user name or password!";
  invaildUser=false;
  constructor(private _fb : FormBuilder) {
  this.loginForm = this._fb.group({
      username : [''],
      password : ['']
    })
   }

  ngOnInit(): void {
  }

  onLogin(){
    if(this.loginForm.get('username')?.value=="Lipi" && this.loginForm.get('password')?.value==12345){
      this.invaildUser=false;
    }
    else{
      this.invaildUser=true;
    }
  }

}

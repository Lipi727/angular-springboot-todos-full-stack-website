import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errorInvaildUserMessage="Invaild user name or password!";
  invaildUser=false;
  
  constructor(private _fb : FormBuilder, private router: Router, private authenticationService: AuthenticationService) {
  this.loginForm = this._fb.group({
      username : [''],
      password : ['']
    })
   }

  ngOnInit(): void {
  }

  onLogin(){
    if(this.authenticationService.authenticate(this.loginForm.get('username')?.value, this.loginForm.get('password')?.value)){
      // redirect to todo page
      this.router.navigate(['todos', this.loginForm.get('username')?.value]);
      this.invaildUser=false;
      console.log(this.authenticationService.isUserLoggedIn());
    }
    else{
      this.invaildUser=true;
      this.loginForm.reset();
    }
  }

}



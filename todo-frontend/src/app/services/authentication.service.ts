import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate(username:string, password: string){
   if(username=="Lipi"  && password=="12345"){
     sessionStorage.setItem('authenticaterUser', username);
     return true;
   }
   return false;
  }

  logout(){
    sessionStorage.removeItem('authenticaterUser');
  }
  
  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticaterUser');
    return !(user===null);
  }
}

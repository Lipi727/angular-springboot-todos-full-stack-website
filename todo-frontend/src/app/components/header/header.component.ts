import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public authenticationSvc: AuthenticationService) { }

  ngOnInit(): void {
    // this.authenticationSvc.isUserLoggedIn()
  }

}

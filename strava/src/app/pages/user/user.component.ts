import { Component } from '@angular/core';
import {UserService} from "../../user.service";
import {OAuthService} from "angular-oauth2-oidc";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  constructor(private readonly userService: UserService , private readonly authService: OAuthService) { }

  ngOnInit(): void {
    console.log(this.authService.getIdentityClaims());
    console.log(this.authService.getIdToken());
    console.log(this.authService.getAccessToken());
  }

  getClaims() : Record<string, any> {
    return this.authService.getIdentityClaims();
  }

  getUser(): void {
    this.userService.getUser2().subscribe((user) => {
      console.log(user);
    });
  }

}

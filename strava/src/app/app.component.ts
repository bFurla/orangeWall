import { Component } from '@angular/core';
import { environment } from './../environments/environment';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';
import {AuthConfig, OAuthService} from "angular-oauth2-oidc";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  env = environment.env;

  constructor(private readonly oAuthService: OAuthService) {
    this.configure();
  }

  authConfig : AuthConfig = {
    issuer: environment.issuer,
    redirectUri: environment.redirectUri,
    logoutUrl : environment.logoutUrl,
    clientId: environment.clientId,
    scope: environment.scope,
    clearHashAfterLogin: environment.clearHashAfterLogin,
    strictDiscoveryDocumentValidation: environment.strictDiscoveryDocumentValidation
  }

  private configure() {
    this.oAuthService.configure(this.authConfig);
    this.oAuthService.tokenValidationHandler = new JwksValidationHandler();
    if(!this.oAuthService.getIdToken()){
      this.oAuthService.loadDiscoveryDocumentAndTryLogin().then(r => console.log(r));
    }
  }

  get isLoggedIn() {
    return !!this.oAuthService.getIdToken();
  }

  handleLoginClick() {
    if(!this.isLoggedIn) {
      this.oAuthService.initLoginFlow();
    }
    else {
      this.oAuthService.logOut();

    }
  }

}

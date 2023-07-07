import { CanActivateFn } from '@angular/router';
import {inject} from "@angular/core";
import {OAuthService} from "angular-oauth2-oidc";

export const connexionGuard: CanActivateFn = (route, state) => {
  const ouathService = inject(OAuthService);
  if(!ouathService.hasValidAccessToken() || !ouathService.hasValidIdToken()) {
    ouathService.initLoginFlow();
  }
  return ouathService.hasValidAccessToken() && ouathService.hasValidIdToken();
};

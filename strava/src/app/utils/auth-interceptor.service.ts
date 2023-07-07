import {Injectable} from '@angular/core';
import {HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {OAuthService} from "angular-oauth2-oidc";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private readonly oauthService: OAuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Get the authorization token from your preferred source (e.g., local storage, session storage, etc.)
    const authToken: string = this.oauthService.getIdToken();

    // Si pas de token, on laisse passer la requête sans modification
    if(!authToken) {
      return next.handle(req);
    }

    // Clone the request and set the Authorization header
    const authReq = req.clone({
      headers: new HttpHeaders({
        'Authorization': `Bearer ${authToken}`,
        'Access-Control-Allow-Origin': '*'
      })
    });

    // Pass the modified request to the next interceptor or the HttpHandler
    return next.handle(authReq);
  }
}

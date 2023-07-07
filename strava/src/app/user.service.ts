import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly mainUrl: string;

  constructor(private readonly httpClient: HttpClient) {
    this.mainUrl = environment.baseHref;
  }


  getUser2(): Observable<any> {
      return this.httpClient.get<any>(`${this.mainUrl}/api/user/me2`);
  }
}

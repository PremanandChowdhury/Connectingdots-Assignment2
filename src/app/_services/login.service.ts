import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

export interface User {
  username: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http: HttpClient) { }

  getLoginAccess(value: User) {
    const LOGIN_URL = `https://dummyjson.com/auth/login`
    const HEADER_OPTIONS = {
      'Content-Type': 'application/json'
    }
    const HEADERS = new HttpHeaders(HEADER_OPTIONS)

    return this.http.post(
      LOGIN_URL,
      value,
      {
        headers: HEADERS
      })
  }
}

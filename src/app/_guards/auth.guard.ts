import { Injectable } from "@angular/core";
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  user: any
  token: any

  constructor(private router: Router) {  }

  canActivate(): boolean {
    if(sessionStorage.getItem('user')) {
      this.token = JSON.parse(sessionStorage.getItem('user'))['token']
    }

    if(!this.token) {
      this.router.navigate(['/login'])
      return false
    }
    return true
  }

}
import { Injectable } from "@angular/core";
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  user: any

  constructor(private router: Router) {  }

  canActivate(): boolean {
   const { token } = JSON.parse(sessionStorage.getItem('user'))

    if(!token) {
      this.router.navigate(['/login'])
      return false
    }
    return true
  }

}
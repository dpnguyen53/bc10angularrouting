import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private router: Router){}

  canActivate() {
    if(localStorage.getItem("UserAdmin")){
      //da login roi
      return true;
    }
    //chua login - chuyen huong ve /auth
    this.router.navigate(['/auth']);
    return false;
  }
}

import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable()
export class LoginGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return undefined;
  }

  // constructor(private router: Router) { }
  //
  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
  //   if (localStorage.getItem('currentUser')) {
  //     //如果是登录,则返回true
  //     return true;
  //   }
  //
  //   //如果没有登录, 则返回登录页面
  //   this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
  //   return false;
  // }

}

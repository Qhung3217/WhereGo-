import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class WriterAuthenticateGuard implements CanActivate {
  constructor(private router: Router, private cookieService: CookieService) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const isAuth = !!this.cookieService.get('writer');
    console.log('Guard: ', isAuth, state, route.url[0]);
    if (isAuth) return true;
    return this.router.createUrlTree(['/auth/writer/login'], {
      queryParams: { redirectUrl: encodeURIComponent(state.url) },
    });
  }
}

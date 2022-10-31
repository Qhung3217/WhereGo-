import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { map, Observable, take } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({ providedIn: 'root' })
export class TravelerAuthenticateGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private cookieService: CookieService
  ) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const isAuth = !!this.cookieService.get('traveler');
    console.log('Guard: ', isAuth, state, route.url[0]);
    if (isAuth) return true;
    return this.router.createUrlTree(['/auth/traveler/login'], {
      queryParams: { redirectUrl: encodeURIComponent(state.url) },
    });
  }
}

// return this.authService.travelerCredential.pipe(
//   take(1),
//   map((auth) => {
//     console.log(auth);
//     const isAuth = !!auth;
//     if (isAuth) return true;
//     return this.router.createUrlTree(['/auth/traveler/login'], {
//       queryParams: { redirectUrl: state.url },
//     });
//   })
// );

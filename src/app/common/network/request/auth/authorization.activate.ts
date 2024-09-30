import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LocalStorageService } from 'src/app/common/services/local-storage.service';
import { SessionStorageService } from 'src/app/common/services/session-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationActivate implements CanActivate {
  constructor(
    private local: LocalStorageService,
    private session: SessionStorageService,
    private cookie: CookieService,
    private router: Router
  ) {}
  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // console.log(route, state);
    let challenge = this.session.authentication;
    let user = this.local.user;
    let holdCookie = this.cookie.check('username');
    if (challenge && user && user.Id && holdCookie) {
      return true;
    }

    return this.router.navigateByUrl('/login');
  }
}

/*
 * @Author: pmx
 * @Date: 2022-08-01 13:46:28
 * @Last Modified by: zzl
 * @Last Modified time: 2022-12-15 17:27:36
 */

import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { plainToInstance } from 'class-transformer';
import { CookieService } from 'ngx-cookie-service';

import { firstValueFrom } from 'rxjs';
import { LocalStorageService } from 'src/app/common/services/local-storage.service';
import { SessionStorageService } from 'src/app/common/services/session-storage.service';
import { DigestResponse } from '../../models/auth/digest-response.model';
import { User } from '../../models/user/user.model';
import { UserUrl } from '../../url/user/user.url';
@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  constructor(
    private _localStorage: LocalStorageService,
    private session: SessionStorageService,

    private _cookieService: CookieService,
    private http: HttpClient
  ) {
    if (this._cookieService.check('username')) {
      let username = this._cookieService.get('username');
      username = atob(username);
      let res = username.match(
        /[a-zA-Z0-9+/=]{32}(?<username>[\w.]+)[a-zA-Z0-9+/=]{32}/
      )!;
      username = res.groups!['username'];

      this.session.username = username;
    }

    if (this._cookieService.check('password')) {
      let password = this._cookieService.get('password');
      password = atob(password);
      let res2 = password.match(
        /[a-zA-Z0-9+/=]{32}(?<password>[\w.]+)[a-zA-Z0-9+/=]{32}/
      )!;
      password = res2.groups!['password'];

      this.session.password = password;
    }
  }

  login(url: string): Promise<User>;
  login(username: string, password: string): Promise<User>;
  login(username: string, password?: string): Promise<User> {
    if (password) {
      return this.loginByUsername(username, password);
    } else {
      return this.loginByUrl(username);
    }
  }
  async loginByUsername(username: string, password: string) {
    this.session.username = username;
    this.session.password = password;

    let url = UserUrl.login(username);
    let headers = new HttpHeaders({
      'X-Webbrowser-Authentication': 'Forbidden',
    });

    return new Promise<User>((resolve, reject) => {
      firstValueFrom(this.http.get<User>(url, { headers })).catch(
        (error: HttpErrorResponse) => {
          if (error.status == 403) {
            let authenticateHeader =
              error.headers.get('www-authenticate') ?? '';
            let challenge = DigestResponse.parse(authenticateHeader);
            this.session.authentication = challenge;
            let authorization = challenge.ToString(
              'GET',
              url,
              username,
              password,
              this.session.nc
            );
            headers = headers.append('Authorization', authorization);
            firstValueFrom(this.http.get<User>(url, { headers }))
              .then((x) => {
                let result = plainToInstance(User, x);
                this._localStorage.user = result;
                resolve(result);
              })
              .catch((e) => {
                reject(e);
              });
          }
        }
      );
    });
  }

  loginByUrl(url: string): Promise<User> {
    return this.login(this.session.username, this.session.password);
  }
}

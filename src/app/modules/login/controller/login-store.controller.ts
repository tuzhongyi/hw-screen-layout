import { Injectable } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';

import { User } from 'src/app/common/network/models/user/user.model';
import { LocalStorageService } from 'src/app/common/services/local-storage.service';
import { Md5 } from 'ts-md5';
import { LoginModel } from '../login.model';

@Injectable()
export class LoginStoreController {
  constructor(
    private cookie: CookieService,
    private local: LocalStorageService
  ) {}

  load() {
    let model = new LoginModel();

    if (this.cookie.check('autoLogin')) {
      model.auto = JSON.parse(this.cookie.get('autoLogin'));
    }

    if (this.cookie.check('savePassWord')) {
      model.save = JSON.parse(this.cookie.get('savePassWord'));
    }

    // console.log(autoLogin, savePassWord);

    if (model.save) {
      let userName = this.cookie.get('userName');
      // console.log(userName);
      userName = atob(userName);
      // console.log(userName);
      let res = userName.match(
        /[a-zA-Z0-9+/=]{32}(?<userName>[\w.]+)[a-zA-Z0-9+/=]{32}/
      )!;
      // console.log(res);
      userName = res.groups!['userName'];

      let passWord = this.cookie.get('passWord');

      passWord = atob(passWord);

      let res2 = passWord.match(
        /[a-zA-Z0-9+/=]{32}(?<passWord>[\w.]+)[a-zA-Z0-9+/=]{32}/
      )!;

      passWord = res2.groups!['passWord'];
      model.username = userName;
      model.password = passWord;
    }
    return model;
  }

  save(user: User, model: LoginModel) {
    let options = {
      expires: new Date(Date.now() + 60 * 60 * 1000),
      path: '/',
      secure: false,
    };
    this.cookie.set('savePassWord', JSON.stringify(model.save), options);
    this.cookie.set('autoLogin', JSON.stringify(model.auto), options);
    // username

    let prefix = Md5.hashStr(
      ((Math.random() * 1e9) | 0).toString(16).padStart(8, '0')
    );
    let suffix = Md5.hashStr(
      ((Math.random() * 1e9) | 0).toString(16).padStart(8, '0')
    );

    let userName = btoa(`${prefix}${model.username}${suffix}`);
    this.cookie.set('userName', userName, options);

    //password
    prefix = Md5.hashStr(
      ((Math.random() * 1e9) | 0).toString(16).padStart(8, '0')
    );
    suffix = Md5.hashStr(
      ((Math.random() * 1e9) | 0).toString(16).padStart(8, '0')
    );
    let passWord = btoa(`${prefix}${model.password}${suffix}`);
    this.cookie.set('passWord', passWord, options);

    this.local.user = user;
  }
}

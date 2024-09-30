/*
 * @Author: pmx
 * @Date: 2021-09-06 17:08:43
 * @Last Modified by: pmx
 * @Last Modified time: 2022-11-09 10:03:04
 */

import { HttpErrorResponse } from '@angular/common/http';
import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

import { RoutePath } from 'src/app/app-routing.path';
import { AuthorizationService } from 'src/app/common/network/request/auth/authorization.service';
import { Md5 } from 'ts-md5';
import {
  LoginController,
  LoginControllerProvider,
} from './controller/login.controller';
import { LoginModel } from './login.model';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
  providers: [...LoginControllerProvider],
})
export class LoginComponent
  implements OnInit, AfterViewInit, AfterViewChecked, OnDestroy
{
  constructor(
    title: Title,
    private authorization: AuthorizationService,
    private router: Router,
    private cookie: CookieService,
    private controller: LoginController
  ) {
    title.setTitle('用户登录');
  }

  @ViewChild('loginVideo')
  video?: ElementRef;
  @ViewChild('username')
  username?: ElementRef;
  @ViewChild('password')
  password?: ElementRef;

  // 在获得服务器返回前,登录按钮不能重复点击
  disableLogin: boolean = false;
  model = new LoginModel();
  focused = false;

  keypressHandle?: (e: KeyboardEvent) => void;
  private get check() {
    if (!this.model.username) {
      console.warn('请输入账号');
      return false;
    }
    if (!this.model.password) {
      console.warn('请输入密码');
      return false;
    }
    return true;
  }

  ngOnInit() {
    this.load();

    this.keypressHandle = this.onkeypress.bind(this);
    window.addEventListener('keypress', this.keypressHandle);
  }

  ngAfterViewInit() {
    if (this.username && !this.model.username) {
      this.username.nativeElement.value = '';
    }
    if (this.password && !this.model.password) {
      this.password.nativeElement.value = '';
    }
  }
  ngAfterViewChecked(): void {
    if (this.username && !this.model.username) {
      this.username.nativeElement.value = '';
    }
    if (this.password && !this.model.password) {
      this.password.nativeElement.value = '';
    }
  }
  ngOnDestroy(): void {
    if (this.keypressHandle) {
      window.removeEventListener('keypress', this.keypressHandle);
    }
  }
  onkeypress(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      this.login();
    }
  }
  load() {
    this.model = this.controller.store.load();
    if (this.model.auto) {
      this.login();
    }
  }

  test(
    nonce: string,
    nc: string,
    cnonce: string,
    username: string = 'yangpuqu',
    password: string = '95buz5n8',
    qop: string = 'auth',
    method = 'GET',
    uri = '/howell/ver10/data_service/user_system/Users/Login/yangpuqu',
    realm: string = 'howell.net.cn'
  ) {
    const hash1 = Md5.hashStr(`${username}:${realm}:${password}`);
    console.log('hash1:', hash1);
    const hash2 = Md5.hashStr(`${method}:${uri}`);
    console.log('hash2:', hash2);
    let a = `${hash1}:${nonce}:${nc}:${cnonce}:${qop}:${hash2}`;
    console.log(a);
    const response = Md5.hashStr(a);
    return response;
  }

  async login() {
    // let nonce = 'fc5f3c277dba491eaeedd77d25e41dd1'; //'ad2af40c5f244b77afa15b0e62e572c0';
    // let nc = '00000001'; //'00000032';
    // let cnonce = '9p9xmi9o'; //'ne02coyj';
    // let request = this.test(nonce, nc, cnonce);
    // console.log('response:', request);
    // return;

    if (this.check) {
      this.disableLogin = true;

      this.authorization
        .login(this.model.username, this.model.password)
        .then((user) => {
          this.controller.config.load(user);
          this.controller.store.save(user, this.model);
          this.router.navigateByUrl(RoutePath.mobile);
        })
        .catch((e: HttpErrorResponse) => {
          if (e.status == 403 || e.status == 500) {
            console.error('账号或密码错误');
          } else {
            console.error('登录失败');
          }
        })
        .finally(() => {
          this.disableLogin = false;
        });
    }
  }
}

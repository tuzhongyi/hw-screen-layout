import { Injectable } from '@angular/core';
import { LoginConfigController } from './login-config.controller';
import { LoginStoreController } from './login-store.controller';

@Injectable()
export class LoginController {
  constructor(
    public config: LoginConfigController,
    public store: LoginStoreController
  ) {}
}
export const LoginControllerProvider = [
  LoginConfigController,
  LoginStoreController,
  LoginController,
];

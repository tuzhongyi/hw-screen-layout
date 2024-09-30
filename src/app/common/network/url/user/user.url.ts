import { AbstractUrl } from '../abstract.url';
import { BaseUrl } from '../base.url';
import { ConfigInnerUrl } from './config.url';
import { LabelInnerUrl } from './label.url';
import { PasswordInnerUrl } from './password.url';
import { RoleInnerUrl } from './role.url';

export class UserUrl extends AbstractUrl {
  private static url = new UserUrl(`${BaseUrl.user_system}/Users`);

  static basic() {
    return this.url.basic();
  }
  static item(id: string) {
    return this.url.item(id);
  }
  static list() {
    return this.url.list();
  }
  static login(username: string): string {
    return `${this.basic()}/Login/${username}`;
  }
  static role(userId: string) {
    return new RoleInnerUrl(this.item(userId));
  }
  static config(userId: string) {
    return new ConfigInnerUrl(this.item(userId));
  }
  static label() {
    return new LabelInnerUrl(this.basic());
  }
  static password(userId: string) {
    return new PasswordInnerUrl(this.item(userId));
  }
}

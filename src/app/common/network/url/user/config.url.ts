import { UserConfigType } from 'src/app/common/enums/user/user-config-type.enum';
import { AbstractUrl } from '../abstract.url';

export class ConfigInnerUrl extends AbstractUrl {
  constructor(base: string) {
    super(`${base}/Config`);
  }
  override item<T = UserConfigType>(type: T) {
    return `${this.basic()}/${type}`;
  }
}

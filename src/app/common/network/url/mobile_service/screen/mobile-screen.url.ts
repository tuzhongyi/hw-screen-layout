import { AbstractUrl } from '../../abstract.url';
import { MobileServiceScreenLayoutUrl } from './mobile-screen-layout.url';

export class MobileServiceScreenUrl extends AbstractUrl {
  constructor(base: string) {
    super(`${base}/Screens`);
  }

  get layout() {
    return new MobileServiceScreenLayoutUrl(this.basic());
  }
}

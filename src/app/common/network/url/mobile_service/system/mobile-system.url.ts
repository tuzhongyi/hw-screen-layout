import { AbstractUrl } from '../../abstract.url';

export class MobileServiceSystemUrl extends AbstractUrl {
  constructor(base: string) {
    super(`${base}/System`);
  }

  version() {
    return `${this.basic()}/Version`;
  }
}

import { AbstractUrl } from '../../abstract.url';

export class MobileServiceScreenLayoutUrl extends AbstractUrl {
  constructor(base: string) {
    super(`${base}/Layouts`);
  }

  publish(id: string) {
    return `${this.item(id)}/Publish`;
  }
}

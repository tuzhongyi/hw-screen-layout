import { AbstractUrl } from '../../abstract.url';

export class MobileServiceTaskUrl extends AbstractUrl {
  constructor(base: string) {
    super(`${base}/Tasks`);
  }
}

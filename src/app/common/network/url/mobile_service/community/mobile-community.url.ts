import { AbstractUrl } from '../../abstract.url';

export class MobileServiceCommunityUrl extends AbstractUrl {
  constructor(base: string) {
    super(`${base}/Communities`);
  }
}

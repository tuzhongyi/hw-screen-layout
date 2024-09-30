import { AbstractUrl } from '../../abstract.url';

export class MobileServiceDivisionUrl extends AbstractUrl {
  constructor(base: string) {
    super(`${base}/Divisions`);
  }
}

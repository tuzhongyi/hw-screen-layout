import { UserLabelType } from 'src/app/common/enums/user/user-label-type.enum';
import { AbstractUrl } from '../abstract.url';

export class LabelInnerUrl extends AbstractUrl {
  constructor(base: string) {
    super(`${base}/Labels`);
  }

  type(id: string, type: UserLabelType) {
    return `${this.item(id)}/LabelTypes/${type}`;
  }
}

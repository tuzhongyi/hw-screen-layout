import { PagedParams } from '../../models/common/params.interface';
import { AbstractUrl } from '../abstract.url';

export class RoleInnerUrl extends AbstractUrl {
  constructor(base: string) {
    super(`${base}/Roles`);
  }
  override basic(params?: PagedParams) {
    let query = this.toQueryString(params);
    return `${this.base}/Roles${query}`;
  }

  private toQueryString(params?: PagedParams) {
    if (!params) return '';
    if (params.PageIndex && params.PageSize) {
      return `?=PageIndex${params.PageIndex}&PageSize=${params.PageSize}`;
    } else if (params.PageIndex) {
      return `?=PageIndex${params.PageIndex}`;
    } else if (params.PageSize) {
      return `?=PageSize${params.PageSize}`;
    } else {
      return '';
    }
  }
}

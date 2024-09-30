import { Injectable } from '@angular/core';
import { HowellTypeRequestService } from '../../howell-type.request.service';

import { Community } from '../../../models/mobile_service/community.model';
import { MobileServiceUrl } from '../../../url/mobile_service/mobile_service.url';
import { HowellAuthHttpClient } from '../../howell-auth-http.client';
import { GetDivisionsParams } from '../division/mobile-division.request.params';
@Injectable({
  providedIn: 'root',
})
export class MobileCommunityRequestService {
  private service: HowellTypeRequestService<Community>;
  constructor(http: HowellAuthHttpClient) {
    this.service = new HowellTypeRequestService(http, Community);
  }
  create(data: Community) {
    let url = MobileServiceUrl.community.basic();
    return this.service.post(url, data);
  }
  get(id: string) {
    let url = MobileServiceUrl.community.item(id);
    return this.service.get(url);
  }
  update(data: Community) {
    let url = MobileServiceUrl.community.item(data.Id);
    return this.service.put(url, data);
  }
  delete(id: string) {
    let url = MobileServiceUrl.community.item(id);
    return this.service.delete(url);
  }
  list(params: GetDivisionsParams) {
    let url = MobileServiceUrl.community.list();
    return this.service.paged(url, params);
  }
}

import { Injectable } from '@angular/core';
import { Division } from '../../../models/mobile_service/division.model';
import { MobileServiceUrl } from '../../../url/mobile_service/mobile_service.url';
import { HowellAuthHttpClient } from '../../howell-auth-http.client';
import { HowellTypeRequestService } from '../../howell-type.request.service';
import { GetDivisionsParams } from './mobile-division.request.params';
@Injectable({
  providedIn: 'root',
})
export class MobileDivisionRequestService {
  private service: HowellTypeRequestService<Division>;
  constructor(http: HowellAuthHttpClient) {
    this.service = new HowellTypeRequestService(http, Division);
  }
  create(data: Division) {
    let url = MobileServiceUrl.division.basic();
    return this.service.post(url, data);
  }
  get(id: string) {
    let url = MobileServiceUrl.division.item(id);
    return this.service.get(url);
  }
  update(data: Division) {
    let url = MobileServiceUrl.division.item(data.Id);
    return this.service.put(url, data);
  }
  delete(id: string) {
    let url = MobileServiceUrl.division.item(id);
    return this.service.delete(url);
  }
  list(params: GetDivisionsParams) {
    let url = MobileServiceUrl.division.list();
    return this.service.paged(url, params);
  }
}

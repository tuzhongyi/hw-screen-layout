import { Injectable } from '@angular/core';

import { PagedList } from '../../../models/common/page-list.model';
import { Screen } from '../../../models/mobile_service/screen.model';
import { MobileServiceUrl } from '../../../url/mobile_service/mobile_service.url';
import { HowellAuthHttpClient } from '../../howell-auth-http.client';
import { HowellTypeRequestService } from '../../howell-type.request.service';
import { MobileScreenLayoutRequestService } from './mobile-screen-layout.request.service';
import { GetScreensParams } from './mobile-screen.request.params';
@Injectable({
  providedIn: 'root',
})
export class MobileScreenRequestService {
  private service: HowellTypeRequestService<Screen>;
  constructor(
    http: HowellAuthHttpClient,
    public layout: MobileScreenLayoutRequestService
  ) {
    this.service = new HowellTypeRequestService<Screen>(http, Screen);
  }
  array() {
    let url = MobileServiceUrl.screen.basic();
    return this.service.array(url);
  }
  get(id: string): Promise<Screen> {
    let url = MobileServiceUrl.screen.item(id);
    return this.service.get(url);
  }
  update(data: Screen) {
    let url = MobileServiceUrl.screen.item(data.Id);
    return this.service.put(url, data);
  }
  delete(id: string): Promise<Screen> {
    let url = MobileServiceUrl.screen.item(id);
    return this.service.delete(url);
  }
  list(params: GetScreensParams): Promise<PagedList<Screen>> {
    let url = MobileServiceUrl.screen.list();
    return this.service.paged(url, params);
  }
}

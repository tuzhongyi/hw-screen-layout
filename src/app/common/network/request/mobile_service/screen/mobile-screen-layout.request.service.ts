import { Injectable } from '@angular/core';
import { DeviceTask } from '../../../models/mobile_service/device-task.model';
import { ScreenLayout } from '../../../models/mobile_service/screen-layout.model';
import { MobileServiceUrl } from '../../../url/mobile_service/mobile_service.url';
import { HowellAuthHttpClient } from '../../howell-auth-http.client';
import { HowellTypeRequestService } from '../../howell-type.request.service';
import { PublishToScreenParams } from './mobile-screen-layout.request.params';

@Injectable({
  providedIn: 'root',
})
export class MobileScreenLayoutRequestService {
  private service: HowellTypeRequestService<ScreenLayout>;
  constructor(http: HowellAuthHttpClient) {
    this.service = new HowellTypeRequestService(http, ScreenLayout);
  }
  array() {
    let url = MobileServiceUrl.screen.layout.basic();
    return this.service.array(url);
  }
  create(data: ScreenLayout) {
    let url = MobileServiceUrl.screen.layout.basic();
    return this.service.post(url, data);
  }
  get(id: string) {
    let url = MobileServiceUrl.screen.layout.item(id);
    return this.service.get(url);
  }
  update(data: ScreenLayout) {
    let url = MobileServiceUrl.screen.layout.item(data.Id);
    return this.service.put(url, data);
  }
  delete(id: string) {
    let url = MobileServiceUrl.screen.layout.item(id);
    return this.service.delete(url);
  }
  publish(id: string, params: PublishToScreenParams) {
    let url = MobileServiceUrl.screen.layout.publish(id);
    return this.service.service.post(url, params, DeviceTask);
  }
}

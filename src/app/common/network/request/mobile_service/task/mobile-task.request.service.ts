import { Injectable } from '@angular/core';
import { DeviceTask } from '../../../models/mobile_service/device-task.model';
import { MobileServiceUrl } from '../../../url/mobile_service/mobile_service.url';
import { HowellAuthHttpClient } from '../../howell-auth-http.client';
import { HowellTypeRequestService } from '../../howell-type.request.service';
import { GetTasksParams } from './mobile-task.request.params';
@Injectable({
  providedIn: 'root',
})
export class MobileTaskRequestService {
  private service: HowellTypeRequestService<DeviceTask>;
  constructor(http: HowellAuthHttpClient) {
    this.service = new HowellTypeRequestService(http, DeviceTask);
  }
  create(data: DeviceTask) {
    let url = MobileServiceUrl.task.basic();
    return this.service.post(url, data);
  }
  get(id: string) {
    let url = MobileServiceUrl.task.item(id);
    return this.service.get(url);
  }
  delete(id: string) {
    let url = MobileServiceUrl.task.item(id);
    return this.service.delete(url);
  }
  list(params: GetTasksParams) {
    let url = MobileServiceUrl.task.list();
    return this.service.paged(url, params);
  }
}

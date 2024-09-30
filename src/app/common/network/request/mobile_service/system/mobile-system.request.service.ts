import { Injectable } from '@angular/core';
import { ServiceVersion } from '../../../models/mobile_service/service-version.model';
import { MobileServiceUrl } from '../../../url/mobile_service/mobile_service.url';
import { HowellAuthHttpClient } from '../../howell-auth-http.client';
import { HowellTypeRequestService } from '../../howell-type.request.service';

@Injectable({
  providedIn: 'root',
})
export class MobileSystemRequestService {
  constructor(http: HowellAuthHttpClient) {
    this.service = new HowellTypeRequestService<ServiceVersion>(
      http,
      ServiceVersion
    );
  }
  private service: HowellTypeRequestService<ServiceVersion>;

  version() {
    let url = MobileServiceUrl.system.version();
    return this.service.get(url);
  }
}

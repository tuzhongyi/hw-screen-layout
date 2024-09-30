import { Injectable } from '@angular/core';
import { instanceToPlain, plainToInstance } from 'class-transformer';
import { ScreenLayout } from 'src/app/common/network/models/mobile_service/screen-layout.model';
import { Screen } from 'src/app/common/network/models/mobile_service/screen.model';
import { MobileRequestService } from 'src/app/common/network/request/mobile_service/mobile.request.service';

export class ScreenModel extends Screen {
  Layout?: Promise<ScreenLayout>;
}

@Injectable({
  providedIn: 'root',
})
export class ScreenConverter {
  constructor(private service: MobileRequestService) {}

  to(source: Screen) {
    let plain = instanceToPlain(source);
    let model = plainToInstance(ScreenModel, plain);
    if (source.LayoutId) {
      model.Layout = this.service.screen.layout.get(source.LayoutId);
    }
    return model;
  }
}

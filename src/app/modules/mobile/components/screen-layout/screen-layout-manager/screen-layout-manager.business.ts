import { Injectable } from '@angular/core';
import { Screen } from 'src/app/common/network/models/mobile_service/screen.model';
import { MobileRequestService } from 'src/app/common/network/request/mobile_service/mobile.request.service';
import { ScreenConverter } from '../../../converters/screen.converter';

@Injectable()
export class ScreenLayoutManagerBusiness {
  constructor(
    private service: MobileRequestService,
    private converter: ScreenConverter
  ) {}

  async load(source: Screen) {
    let model = this.converter.to(source);
    return model;
  }
}

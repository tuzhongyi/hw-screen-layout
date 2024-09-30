import { BaseUrl } from '../base.url';
import { MobileServiceCommunityUrl } from './community/mobile-community.url';
import { MobileServiceDivisionUrl } from './division/mobile-division.url';
import { MobileServiceScreenUrl } from './screen/mobile-screen.url';
import { MobileServiceSystemUrl } from './system/mobile-system.url';
import { MobileServiceTaskUrl } from './task/mobile-task.url';

export class MobileServiceUrl {
  private static url = BaseUrl.mobile_service;

  static get system() {
    return new MobileServiceSystemUrl(this.url);
  }
  static get screen() {
    return new MobileServiceScreenUrl(this.url);
  }
  static get division() {
    return new MobileServiceDivisionUrl(this.url);
  }
  static get community() {
    return new MobileServiceCommunityUrl(this.url);
  }
  static get task() {
    return new MobileServiceTaskUrl(this.url);
  }
}

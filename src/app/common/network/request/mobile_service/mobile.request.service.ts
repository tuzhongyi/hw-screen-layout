import { Injectable } from '@angular/core';
import { MobileCommunityRequestService } from './community/mobile-community.request.service';
import { MobileDivisionRequestService } from './division/mobile-division.request.service';
import { MobileScreenRequestService } from './screen/mobile-screen.request.service';
import { MobileSystemRequestService } from './system/mobile-system.request.service';
import { MobileTaskRequestService } from './task/mobile-task.request.service';
@Injectable({
  providedIn: 'root',
})
export class MobileRequestService {
  constructor(
    public system: MobileSystemRequestService,
    public screen: MobileScreenRequestService,
    public division: MobileDivisionRequestService,
    public community: MobileCommunityRequestService,
    public task: MobileTaskRequestService
  ) {}
}

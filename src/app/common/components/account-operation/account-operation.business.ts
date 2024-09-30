import { Injectable } from '@angular/core';
import { UserRequestService } from '../../network/request/user/user-request.service';
import { LocalStorageService } from '../../services/local-storage.service';
import { SessionStorageService } from '../../services/session-storage.service';

@Injectable()
export class AccountOperationBusiness {
  constructor(
    private service: UserRequestService,
    private local: LocalStorageService,
    private session: SessionStorageService
  ) {}

  private handle?: any;
  private interval = 1 * 1000 * 60 * 30;
  private userId = this.local.user.Id;

  load() {
    return this.local.user;
  }

  heart() {
    this.handle = setInterval(() => {
      this.get(this.userId).catch((x) => {
        this.stop();
      });
    }, this.interval);
  }

  private get(id: string) {
    return this.service.get(id);
  }

  private stop() {
    if (this.handle) {
      clearInterval(this.handle);
    }
  }

  clear() {
    this.stop();
    this.session.clear();
    this.local.clear();
  }
}

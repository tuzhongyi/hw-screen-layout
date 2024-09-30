import { Injectable } from '@angular/core';
import { instanceToPlain } from 'class-transformer';

import { UserConfigType } from 'src/app/common/enums/user/user-config-type.enum';
import { UserLabelType } from 'src/app/common/enums/user/user-label-type.enum';
import { Fault } from '../../models/common/howell-response.model';
import { PagedList } from '../../models/common/page-list.model';
import { PagedParams } from '../../models/common/params.interface';
import { Role } from '../../models/user/role.model';
import { UserLabel } from '../../models/user/user-label.model';
import { UserRecord } from '../../models/user/user-record.model';
import { User } from '../../models/user/user.model';
import { PasswordUrl } from '../../url/password/password.url';
import { UserLogUrl } from '../../url/user/user-log.url';
import { UserUrl } from '../../url/user/user.url';
import { HowellAuthHttpClient } from '../howell-auth-http.client';
import { HowellPorcessRequestService } from '../howell-process.request.service';
import {
  ChangeUserPasswordParams,
  CheckCodeParams,
  GetUserLabelsParams,
  GetUserRecordListParams,
  GetUsersParams,
  PasswordCheckCodeResult,
  RandomUserPaswordParams,
} from './user-request.params';

@Injectable({
  providedIn: 'root',
})
export class UserRequestService {
  constructor(http: HowellAuthHttpClient) {
    this.service = new HowellPorcessRequestService(http);
  }

  private service: HowellPorcessRequestService;

  get(id: string): Promise<User> {
    let url = UserUrl.item(id);
    return this.service.get(url, User);
  }
  update(data: User): Promise<Fault> {
    let url = UserUrl.item(data.Id);
    return this.service.put(url, data, Fault);
  }
  create(data: User): Promise<Fault> {
    let url = UserUrl.basic();
    return this.service.post(url, data, Fault);
  }
  delete(id: string): Promise<Fault> {
    let url = UserUrl.item(id);
    return this.service.delete(url, Fault);
  }

  list(
    params: GetUsersParams = new GetUsersParams()
  ): Promise<PagedList<User>> {
    let url = UserUrl.list();
    return this.service.paged(url, params, User);
  }

  private _config?: ConfigService;
  public get config(): ConfigService {
    if (!this._config) {
      this._config = new ConfigService(this.service);
    }
    return this._config;
  }

  private _role?: RolesService;
  public get role(): RolesService {
    if (!this._role) {
      this._role = new RolesService(this.service);
    }
    return this._role;
  }

  private _label?: LabelsService;
  public get label(): LabelsService {
    if (!this._label) {
      this._label = new LabelsService(this.service);
    }
    return this._label;
  }

  private _password?: PasswordsService;
  public get password(): PasswordsService {
    if (!this._password) {
      this._password = new PasswordsService(this.service);
    }
    return this._password;
  }

  private _log?: LogService;
  public get log(): LogService {
    if (!this._log) {
      this._log = new LogService(this.service);
    }
    return this._log;
  }
}

class ConfigService {
  constructor(private basic: HowellPorcessRequestService) {}

  get(userId: string, type: UserConfigType): Promise<string> {
    let url = UserUrl.config(userId).item(type);
    return this.basic.service.get<string>(url);
  }

  update(userId: string, type: UserConfigType, base64: string): Promise<Fault> {
    let url = UserUrl.config(userId).item(type);
    return this.basic.service.put<Fault>(url, base64);
  }
}

class RolesService {
  constructor(private basic: HowellPorcessRequestService) {}

  list(userId: string, params?: PagedParams): Promise<PagedList<Role>> {
    let url = UserUrl.role(userId).basic(params);
    return this.basic.get(url, PagedList<Role>);
  }

  get(userId: string, id: string): Promise<Role> {
    let url = UserUrl.role(userId).item(id);
    return this.basic.get(url, Role);
  }
}

class LabelsService {
  constructor(private basic: HowellPorcessRequestService) {}

  list(params: GetUserLabelsParams): Promise<PagedList<UserLabel>> {
    let url = UserUrl.label().list();
    return this.basic.paged<UserLabel>(url, params, UserLabel);
  }

  get(id: string, type: UserLabelType): Promise<UserLabel> {
    let url = UserUrl.label().type(id, type);
    return this.basic.get(url, UserLabel);
  }
  create(label: UserLabel): Promise<Fault> {
    let url = UserUrl.label().type(label.LabelId, label.LabelType);
    return this.basic.post(url, label, Fault);
  }
  update(label: UserLabel): Promise<Fault> {
    let url = UserUrl.label().type(label.LabelId, label.LabelType);
    return this.basic.put(url, label, Fault);
  }
  delete(id: string, type: UserLabelType) {
    let url = UserUrl.label().type(id, type);
    return this.basic.delete(url, Fault);
  }
}

class PasswordsService {
  constructor(private basic: HowellPorcessRequestService) {}

  random(userId: string, params: RandomUserPaswordParams): Promise<string> {
    let url = UserUrl.password(userId).random();
    return this.basic.service.post<string>(url, params);
  }

  change(userId: string, params: ChangeUserPasswordParams) {
    let url = UserUrl.password(userId).change();
    return this.basic.post(url, params, User);
  }

  private _check?: PasswordCheckService;
  public get check(): PasswordCheckService {
    if (!this._check) {
      this._check = new PasswordCheckService(this.basic);
    }
    return this._check;
  }
}

class PasswordCheckService {
  constructor(private basic: HowellPorcessRequestService) {}

  mobileNo(mobileNo: string): Promise<Fault> {
    let url = PasswordUrl.checkMobileNo(mobileNo);
    return this.basic.get(url, Fault);
  }

  code(mobileNo?: string) {
    let url = PasswordUrl.checkCode(mobileNo);
    return this.basic.service.get<string>(url);
  }

  check(params: CheckCodeParams): Promise<PasswordCheckCodeResult> {
    let data = instanceToPlain(params);
    let url = PasswordUrl.checkCode();
    return this.basic.post(url, data, PasswordCheckCodeResult);
  }
}

class LogService {
  constructor(private basic: HowellPorcessRequestService) {}
  private _record?: LogUserRecordService;
  public get record(): LogUserRecordService {
    if (!this._record) {
      this._record = new LogUserRecordService(this.basic);
    }
    return this._record;
  }
}
class LogUserRecordService {
  constructor(private basic: HowellPorcessRequestService) {}

  list(params: GetUserRecordListParams): Promise<PagedList<UserRecord>> {
    let url = UserLogUrl.record.list();
    return this.basic.paged(url, params, UserRecord);
  }
}

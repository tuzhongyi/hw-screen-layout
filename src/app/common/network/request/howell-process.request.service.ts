import { ClassConstructor } from 'class-transformer';
import { HowellAuthHttpClient } from './howell-auth-http.client';
import { HowellServiceHelper } from './howell-service-helper';
import { HowellRequestService } from './howell.request.service';

export class HowellPorcessRequestService {
  constructor(http: HowellAuthHttpClient) {
    this.service = new HowellRequestService(http);
  }

  public service: HowellRequestService;

  async get<T>(url: string, type: ClassConstructor<T>) {
    let response = await this.service.get<T>(url);
    return HowellServiceHelper.ResponseProcess(response, type);
  }
  async post<T>(url: string, body: any, type: ClassConstructor<T>) {
    let response = await this.service.post<T>(url, body);
    return HowellServiceHelper.ResponseProcess(response, type);
  }
  async put<T>(url: string, body: any, type: ClassConstructor<T>) {
    let response = await this.service.put<T>(url, body);
    return HowellServiceHelper.ResponseProcess(response, type);
  }
  async delete<T>(url: string, type: ClassConstructor<T>) {
    let response = await this.service.delete<T>(url);
    return HowellServiceHelper.ResponseProcess(response, type);
  }
  async paged<T>(url: string, params: any, type: ClassConstructor<T>) {
    let response = await this.service.paged<T>(url, params);
    return HowellServiceHelper.ResponseProcess(response, type);
  }
  async array<T>(url: string, type: ClassConstructor<T>) {
    let response = await this.service.get<T[]>(url);
    return HowellServiceHelper.ResponseProcess(response, type);
  }
}

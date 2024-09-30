import { ClassConstructor } from 'class-transformer';
import { HowellAuthHttpClient } from './howell-auth-http.client';
import { HowellPorcessRequestService } from './howell-process.request.service';

export class HowellTypeRequestService<T> {
  constructor(http: HowellAuthHttpClient, private type: ClassConstructor<T>) {
    this.service = new HowellPorcessRequestService(http);
  }

  public service: HowellPorcessRequestService;

  async get(url: string) {
    return this.service.get<T>(url, this.type);
  }
  async post(url: string, body: any) {
    return this.service.post<T>(url, body, this.type);
  }
  async put(url: string, body: any) {
    return this.service.put<T>(url, body, this.type);
  }
  async delete(url: string) {
    return this.service.delete<T>(url, this.type);
  }
  async paged(url: string, params: any) {
    return this.service.paged<T>(url, params, this.type);
  }
  async array(url: string) {
    return this.service.array(url, this.type);
  }
}

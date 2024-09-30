import { instanceToPlain } from 'class-transformer';
import { firstValueFrom } from 'rxjs';
import { HowellResponse } from '../models/common/howell-response.model';
import { PagedList } from '../models/common/page-list.model';
import { HowellAuthHttpClient } from './howell-auth-http.client';

export class HowellRequestService {
  constructor(private http: HowellAuthHttpClient) {}

  async get<T>(url: string): Promise<T> {
    let response = await firstValueFrom(this.http.get<HowellResponse<T>>(url));
    if (response.Data) {
      return response.Data;
    }
    throw new Error('No data in response');
  }
  async post<T>(url: string, body: any): Promise<T> {
    let plain = instanceToPlain(body);
    let response = await firstValueFrom(
      this.http.post<HowellResponse<T>>(url, plain)
    );
    if (response.Data) {
      return response.Data;
    }
    throw new Error('No data in response');
  }
  async put<T>(url: string, body: any): Promise<T> {
    let plain = instanceToPlain(body);
    let response = await firstValueFrom(
      this.http.put<HowellResponse<T>>(url, plain)
    );
    if (response.Data) {
      return response.Data;
    }
    throw new Error('No data in response');
  }
  async delete<T>(url: string): Promise<T> {
    let response = await firstValueFrom(
      this.http.delete<HowellResponse<T>>(url)
    );
    if (response.Data) {
      return response.Data;
    }
    throw new Error('No data in response');
  }
  async paged<T>(url: string, params: any): Promise<PagedList<T>> {
    let plain = instanceToPlain(params);
    let response = await firstValueFrom(
      this.http.post<HowellResponse<PagedList<T>>>(url, plain)
    );
    if (response.Data) {
      return response.Data;
    }
    throw new Error('No data in response');
  }
}

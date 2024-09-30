import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthorizationTool } from './auth/authorization.tool';

@Injectable({
  providedIn: 'root',
})
export class HowellAuthHttpClient {
  constructor(private http: HttpClient, private tool: AuthorizationTool) {}

  public get<R>(url: string, params?: HttpParams) {
    const myHeaders = this.tool.generateHttpHeader('GET', url);
    const httpOptions = {
      headers: myHeaders,
      params: params,
    };
    return this.http.get<R>(url, httpOptions);
  }
  public post<R = any>(url: string, body?: any, params?: HttpParams) {
    const myHeaders = this.tool.generateHttpHeader('POST', url);
    const httpOptions = {
      headers: myHeaders,
      params: params,
    };
    return this.http.post<R>(url, body, httpOptions);
  }
  public put<R = any>(url: string, model: any, params?: HttpParams) {
    const myHeaders = this.tool.generateHttpHeader('PUT', url);
    const httpOptions = {
      headers: myHeaders,
      params: params,
    };
    return this.http.put<R>(url, model, httpOptions);
  }
  public delete<R = any>(url: string) {
    const myHeaders = this.tool.generateHttpHeader('DELETE', url);
    const httpOptions = {
      headers: myHeaders,
    };
    return this.http.delete<R>(url, httpOptions);
  }
}

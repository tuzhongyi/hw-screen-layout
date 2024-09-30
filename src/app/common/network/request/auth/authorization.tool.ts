import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { plainToInstance } from 'class-transformer';
import { SessionStorageService } from 'src/app/common/services/session-storage.service';
import { DigestResponse } from '../../models/auth/digest-response.model';
import { Digest } from './digest';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationTool {
  constructor(private session: SessionStorageService) {}
  public generateHttpHeader(method: string, uri: string, contentType?: string) {
    let chanllenge = plainToInstance(
      DigestResponse,
      this.session.authentication
    );
    // console.log(chanllenge);

    let username = this.session.username;
    let password = this.session.password;

    let authHeader = chanllenge.ToString(
      method,
      uri,
      username,
      password,
      this.session.nc
    );
    if (contentType) {
      return new HttpHeaders({
        Authorization: authHeader,
        'X-WebBrowser-Authentication': 'Forbidden',
        'content-type': contentType,
      });
    } else {
      return new HttpHeaders({
        Authorization: authHeader,
        'X-WebBrowser-Authentication': 'Forbidden',
      });
    }
  }

  getHttpHeaders(method: string, uri: string) {
    let digest = new Digest();
    var challenge = digest.parseServerChallenge();

    return digest.generateRequestHeader(
      this.session.nc,
      challenge,
      '1',
      '1',
      method,
      uri
    );
  }
}

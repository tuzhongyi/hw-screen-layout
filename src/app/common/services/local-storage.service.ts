import { Injectable } from '@angular/core';
import { ClassConstructor, plainToInstance } from 'class-transformer';
import { StreamType } from '../enums/video/stream-type.enum';
import { User } from '../network/models/user/user.model';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  set user(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
  }
  get user(): User {
    let user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  static Get<T>(key: string, cls: ClassConstructor<T>): T | undefined {
    let plain = localStorage.getItem(key);
    if (plain) {
      return plainToInstance(cls, plain);
    }
    return;
  }

  static Set<T>(key: string, value: T) {
    // let plain = instanceToPlain(value);
    // localStorage.setItem(key, JSON.stringify(plain));
    localStorage.setItem(key, JSON.stringify(value));
  }

  video = {
    stream: StreamType.main,
    rule: false,
  };

  clear(name?: string) {
    if (name) {
      localStorage.removeItem(name);
    } else {
      localStorage.clear();
    }
  }
}

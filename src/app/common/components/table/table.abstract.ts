import { EventEmitter } from '@angular/core';

export abstract class AbstractTable<T> {
  constructor(sticky: boolean = false) {
    this.sticky = sticky;
  }
  abstract widths: Array<string | undefined>;
  abstract _load?: EventEmitter<any>;
  datas: T[] = [];
  loading = false;
  sticky = false;
}

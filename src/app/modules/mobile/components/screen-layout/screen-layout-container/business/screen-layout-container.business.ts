import { Injectable } from '@angular/core';
import { ScreenLayoutContainerConverter } from '../converter/screen-layout-container.converter';
import { ScreenLayoutContainerDataBussiness } from './screen-layout-container-data.business';

@Injectable()
export class ScreenLayoutContainerBussiness {
  constructor(
    private data: ScreenLayoutContainerDataBussiness,
    private converter: ScreenLayoutContainerConverter
  ) {}

  load(id: string) {
    let data = this.data.load(id);
    let model = this.converter.ScreenLayout.to(data);
    return model;
  }

  create() {}
}

export const ScreenLayoutContainerProvider = [
  ScreenLayoutContainerConverter,
  ScreenLayoutContainerBussiness,
  ScreenLayoutContainerDataBussiness,
];

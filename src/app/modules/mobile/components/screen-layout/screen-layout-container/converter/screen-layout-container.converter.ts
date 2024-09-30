import { Injectable } from '@angular/core';
import { ScreenLayoutContainerScreenLayoutElementConverter } from './screen-layout-container-screen-layout-element.converter';
import { ScreenLayoutContainerScreenLayoutConverter } from './screen-layout-container-screen-layout.converter';

@Injectable()
export class ScreenLayoutContainerConverter {
  ScreenLayoutElement = new ScreenLayoutContainerScreenLayoutElementConverter();
  ScreenLayout = new ScreenLayoutContainerScreenLayoutConverter();
}

import { Injectable } from '@angular/core';
import { ScreenLayoutDetailsColorController } from './screen-layout-details-color.controller';

@Injectable()
export class ScreenLayoutDetailsController {
  constructor(public color: ScreenLayoutDetailsColorController) {}
}

export const ScreenLayoutDetailsControllerProvider = [
  ScreenLayoutDetailsColorController,
  ScreenLayoutDetailsController,
];

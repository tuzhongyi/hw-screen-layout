import { Component, Input } from '@angular/core';
import { ImageContent } from 'src/app/common/network/models/mobile_service/contents/content-image.model';
import { ScreenLayoutElement } from 'src/app/common/network/models/mobile_service/screen-layout-element.model';
import { ScreenLayout } from 'src/app/common/network/models/mobile_service/screen-layout.model';
import { ScreenLayoutElementType } from '../screen-layout-element-types/screen-layout-element-types.model';

@Component({
  selector: 'mobile-screen-layout-element-manager',
  templateUrl: './screen-layout-element-manager.component.html',
  styleUrls: ['./screen-layout-element-manager.component.less'],
})
export class ScreenLayoutElementManagerComponent {
  @Input() layout?: ScreenLayout;
  @Input() data?: ScreenLayoutElement;

  type?: ScreenLayoutElementType;

  image = new ImageContent();
  constructor() {
    this.image.Url =
      'https://s.cn.bing.net/th?id=OHR.ConnecticutBridge_ZH-CN4957862425_1920x1080.webp&qlt=50';
  }
}

import { Component, Input } from '@angular/core';
import { ImageContent } from 'src/app/common/network/models/mobile_service/contents/content-image.model';

@Component({
  selector: 'mobile-screen-layout-element-content-image',
  templateUrl: './screen-layout-element-content-image.component.html',
  styleUrls: ['./screen-layout-element-content-image.component.less'],
})
export class ScreenLayoutElementContentImageComponent {
  @Input() data?: ImageContent;
}

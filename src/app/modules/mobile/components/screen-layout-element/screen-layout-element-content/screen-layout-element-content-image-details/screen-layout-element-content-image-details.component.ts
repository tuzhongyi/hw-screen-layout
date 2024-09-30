import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ImageContent } from 'src/app/common/network/models/mobile_service/contents/content-image.model';

@Component({
  selector: 'mobile-screen-layout-element-content-image-details',
  templateUrl: './screen-layout-element-content-image-details.component.html',
  styleUrls: ['./screen-layout-element-content-image-details.component.less'],
})
export class ScreenLayoutElementContentImageDetailsComponent {
  @Input() data: ImageContent = new ImageContent();
  @Output() dataChange = new EventEmitter<ImageContent>();
}

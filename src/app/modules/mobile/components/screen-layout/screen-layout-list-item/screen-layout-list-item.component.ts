import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ScreenLayout } from 'src/app/common/network/models/mobile_service/screen-layout.model';
import { ModelTool } from 'src/app/common/tools/model-tool/model.tool';

@Component({
  selector: 'mobile-screen-layout-list-item',
  templateUrl: './screen-layout-list-item.component.html',
  styleUrls: ['./screen-layout-list-item.component.less'],
})
export class ScreenLayoutListItemComponent implements OnChanges {
  @Input('data') _data?: ScreenLayout;
  @Input() index: number = 0;
  @Input() selected: boolean = false;

  constructor() {}

  data = new ScreenLayout();

  ngOnChanges(changes: SimpleChanges): void {
    if (this._data) {
      this.data = ModelTool.copy(this._data, ScreenLayout);
    }
  }
}

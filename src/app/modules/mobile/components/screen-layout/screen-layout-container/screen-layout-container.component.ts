import { Component, Input, OnInit } from '@angular/core';
import {
  GridsterComponent,
  GridsterConfig,
  GridsterItem,
} from 'angular-gridster2';
import { ScreenLayout } from 'src/app/common/network/models/mobile_service/screen-layout.model';
import { ScreenLayoutContainerProvider } from './business/screen-layout-container.business';

@Component({
  selector: 'mobile-screen-layout-container',
  templateUrl: './screen-layout-container.component.html',
  styleUrls: ['./screen-layout-container.component.less'],
  providers: [...ScreenLayoutContainerProvider],
})
export class ScreenLayoutContainerComponent implements OnInit {
  @Input() data?: ScreenLayout;
  constructor() {}

  options: GridsterConfig = {};
  dashboard: Array<GridsterItem> = [];

  static itemChange(item: GridsterItem, itemComponent: GridsterComponent) {
    console.info('itemChanged', item, itemComponent);
  }

  static itemResize(item: GridsterItem, itemComponent: GridsterComponent) {
    console.info('itemResized', item, itemComponent);
  }

  ngOnInit() {
    this.options = {
      // itemChangeCallback: AppComponent.itemChange,
      // itemResizeCallback: AppComponent.itemResize,
      draggable: {
        enabled: true,
      },
      resizable: {
        enabled: true,
      },
      margin: 10,
      minCols: 12,
      minRows: 4,
      itemChangeCallback: (item, component) => {
        console.log(this.dashboard);
      },
    };

    this.dashboard = [];
  }

  changedOptions() {
    if (this.options && this.options.api && this.options.api.optionsChanged) {
      this.options.api.optionsChanged();
    }
  }

  removeItem(item: GridsterItem) {
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem() {
    let item: any = { x: 0, y: 0, cols: 3, rows: 1, resizeEnabled: true };
    this.dashboard.push(item);
    console.log(this.dashboard);
  }

  onsave() {
    console.log(this.dashboard);
  }
}

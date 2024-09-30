import { Component } from '@angular/core';
import { Screen } from 'src/app/common/network/models/mobile_service/screen.model';
import { ScreenTableArgs } from '../screen-table/screen-table.model';
import { ScreenManagerWindow } from './screen-manager.window';

@Component({
  selector: 'mobile-screen-manager',
  templateUrl: './screen-manager.component.html',
  styleUrls: ['./screen-manager.component.less'],
})
export class ScreenManagerComponent {
  constructor() {
    this.window.layout.show = true;
  }

  window = new ScreenManagerWindow();
  args = new ScreenTableArgs();

  oncreate() {
    this.window.details.show = true;
  }
  onupdate(data: Screen) {
    this.window.details.data = data;
    this.window.details.show = true;
  }
  ondelete(data: Screen) {}
  onlayout(data: Screen) {
    this.window.layout.data = data;
    this.window.layout.show = true;
  }
}

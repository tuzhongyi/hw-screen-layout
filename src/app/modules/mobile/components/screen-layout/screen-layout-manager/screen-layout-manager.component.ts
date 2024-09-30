import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ScreenLayout } from 'src/app/common/network/models/mobile_service/screen-layout.model';
import { Screen } from 'src/app/common/network/models/mobile_service/screen.model';
import { ScreenModel } from '../../../converters/screen.converter';
import { ScreenLayoutManagerBusiness } from './screen-layout-manager.business';
import { ScreenLayoutManagerWindow } from './screen-layout-manager.window';

@Component({
  selector: 'mobile-screen-layout-manager',
  templateUrl: './screen-layout-manager.component.html',
  styleUrls: ['./screen-layout-manager.component.less'],
  providers: [ScreenLayoutManagerBusiness],
})
export class ScreenLayoutManagerComponent implements OnInit {
  @Input() screen?: Screen;
  @Output() close = new EventEmitter<boolean>();
  constructor(private business: ScreenLayoutManagerBusiness) {}

  data?: ScreenModel;
  selected?: ScreenLayout;
  window = new ScreenLayoutManagerWindow();

  ngOnInit(): void {
    if (this.screen) {
      this.load(this.screen);
    }
  }

  load(data: Screen) {
    this.business.load(data).then((x) => {
      this.data = x;
    });
  }

  oncreate() {
    this.window.element.clear();
    this.window.element.show = true;
  }
}

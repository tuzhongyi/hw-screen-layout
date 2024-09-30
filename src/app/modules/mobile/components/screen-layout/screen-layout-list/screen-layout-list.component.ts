import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ScreenLayout } from 'src/app/common/network/models/mobile_service/screen-layout.model';
import { ColorTool } from 'src/app/common/tools/color-tool/color.tool';

@Component({
  selector: 'mobile-screen-layout-list',
  templateUrl: './screen-layout-list.component.html',
  styleUrls: ['./screen-layout-list.component.less'],
})
export class ScreenLayoutListComponent implements OnInit {
  @Input() selected?: ScreenLayout;
  @Output() selectedChange: EventEmitter<ScreenLayout> = new EventEmitter();

  datas: ScreenLayout[] = [];

  ngOnInit(): void {
    this.load();
  }

  load() {
    for (let i = 0; i < 2; i++) {
      const data = new ScreenLayout();
      data.Id = i.toString();
      data.Name = `横向 1920 1080 ${i}`;
      data.BackgroundColor = ColorTool.from.hex.rgb('#2f5da9');
      data.ColumnCount = 1080;
      data.RowCount = 1920;
      this.datas.push(data);
    }
  }
  onselect(data: ScreenLayout) {
    this.selected = data;
    this.selectedChange.emit(this.selected);
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { ScreenLayoutElement } from 'src/app/common/network/models/mobile_service/screen-layout-element.model';

@Component({
  selector: 'screen-layout-tile',
  templateUrl: './screen-layout-tile.component.html',
  styleUrls: ['./screen-layout-tile.component.less'],
})
export class ScreenLayoutTileComponent implements OnInit {
  @Input() data?: ScreenLayoutElement;

  constructor() {}

  ngOnInit(): void {}
}

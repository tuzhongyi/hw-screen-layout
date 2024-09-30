import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EnumTool } from 'src/app/common/tools/enum-tool/enum.tool';
import { IconTool } from 'src/app/common/tools/icon-tool/icon.tool';
import { Language } from 'src/app/common/tools/language-tool/language.tool';
import { ScreenLayoutElementType } from './screen-layout-element-types.model';

@Component({
  selector: 'mobile-screen-layout-element-types',
  templateUrl: './screen-layout-element-types.component.html',
  styleUrls: ['./screen-layout-element-types.component.less'],
})
export class ScreenLayoutElementTypesComponent {
  @Input() selected?: ScreenLayoutElementType;
  @Output() selectedChange = new EventEmitter<ScreenLayoutElementType>();

  constructor() {}

  types = EnumTool.values(ScreenLayoutElementType);
  Language = Language;
  Icon = IconTool;

  onselect(item: ScreenLayoutElementType) {
    this.selected = item;
    this.selectedChange.emit(item);
  }
}

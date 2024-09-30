import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FileResult } from 'src/app/common/components/upload-control/upload-control.model';
import { ScreenLayout } from 'src/app/common/network/models/mobile_service/screen-layout.model';
import { ColorTool } from 'src/app/common/tools/color-tool/color.tool';
import { ModelTool } from 'src/app/common/tools/model-tool/model.tool';
import {
  ScreenLayoutDetailsController,
  ScreenLayoutDetailsControllerProvider,
} from './controller/screen-layout-details.controller';

@Component({
  selector: 'mobile-screen-layout-details',
  templateUrl: './screen-layout-details.component.html',
  styleUrls: ['./screen-layout-details.component.less'],
  providers: [...ScreenLayoutDetailsControllerProvider],
})
export class ScreenLayoutDetailsComponent implements OnChanges {
  @Input('data') _data?: ScreenLayout;
  @Output() dataChange: EventEmitter<ScreenLayout> = new EventEmitter();

  constructor(public controller: ScreenLayoutDetailsController) {}

  data = new ScreenLayout();
  Color = ColorTool;
  path?: string;

  ngOnChanges(changes: SimpleChanges): void {
    this.load();
  }

  load() {
    this.path = undefined;
    if (this._data) {
      this.data = ModelTool.copy(this._data, ScreenLayout);
    }
  }

  onupload(file: FileResult) {
    this.data.BackgroundImageUrl = file as string;
  }
  onuploadclear(e: Event) {
    e.stopImmediatePropagation();
    this.data.BackgroundImageUrl = undefined;
    this.path = undefined;
  }
}

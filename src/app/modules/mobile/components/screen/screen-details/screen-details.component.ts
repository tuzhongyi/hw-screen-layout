import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Screen } from 'src/app/common/network/models/mobile_service/screen.model';
import { Language } from 'src/app/common/tools/language-tool/language.tool';
import { ModelTool } from 'src/app/common/tools/model-tool/model.tool';

@Component({
  selector: 'mobile-screen-details',
  templateUrl: './screen-details.component.html',
  styleUrls: ['./screen-details.component.less'],
})
export class ScreenDetailsComponent implements OnInit {
  @Input('data') _data?: Screen;
  @Output() cancel = new EventEmitter<void>();
  @Output() ok = new EventEmitter<Screen>();

  constructor() {}

  data: Screen = Screen.Create();
  date = new Date();

  Language = Language;

  ngOnInit(): void {
    this.load();
  }

  load() {
    if (this._data) {
      this.data = ModelTool.copy(this._data, Screen);
    }
  }
  oncancel() {
    this.cancel.emit();
  }
  onok() {
    this.ok.emit(this._data);
  }
}

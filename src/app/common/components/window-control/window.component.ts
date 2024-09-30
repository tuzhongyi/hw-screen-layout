import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WindowViewModel } from './window.model';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.less'],
})
export class WindowComponent implements OnInit {
  @Input() Model: WindowViewModel = new WindowViewModel();
  @Input() title?: string;
  @Input() Background = true;

  @Input() CloseButton = true;
  @Input() mask = true;
  @Input() zindex?: number;

  private _style: any = {
    width: '80%',
    height: '80%',
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    top: '50%',
    left: '50%',
  };
  public get style(): any {
    return this._style;
  }
  @Input() public set style(v: any) {
    this._style = Object.assign(this._style, v);
  }

  @Output() OnClosing: EventEmitter<boolean> = new EventEmitter();

  @Input() manualClose = false;

  constructor() {}

  ngOnInit() {}

  closeButtonClick() {
    if (this.manualClose === false) {
      this.Model.show = false;
    }
    this.OnClosing.emit(true);
  }
}

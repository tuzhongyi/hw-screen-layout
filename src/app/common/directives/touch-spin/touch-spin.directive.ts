import {
  AfterViewChecked,
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { HowellTouchSpinOptions } from './touch-spin.model';

declare var $: any;

@Directive({
  selector: '[TouchSpin]',
})
export class TouchSpinDirective implements AfterViewInit, AfterViewChecked {
  @Input() unit?: string;

  private _options: HowellTouchSpinOptions = new HowellTouchSpinOptions();
  public get options(): HowellTouchSpinOptions {
    return this._options;
  }
  @Input() public set options(v: HowellTouchSpinOptions) {
    this._options = Object.assign(this._options, v);
  }

  public get min(): number | undefined {
    return this.options.min;
  }
  @Input() public set min(v: number | undefined) {
    if (v == undefined) return;
    this.options.min = v;
  }

  public get max(): number | undefined {
    return this.options.max;
  }
  @Input() public set max(v: number | undefined) {
    if (v == undefined) return;
    this.options.max = v;
  }
  public get verticalbuttons(): boolean | undefined {
    return this.options.verticalbuttons;
  }
  @Input() public set verticalbuttons(v: boolean | undefined) {
    if (v == undefined) return;
    this.options.verticalbuttons = v;
  }
  public get step(): number | undefined {
    return this.options.step;
  }
  @Input()
  public set step(v: number | undefined) {
    if (v == undefined) return;
    this.options.step = v;
  }
  public get decimals(): number | undefined {
    return this.options.decimals;
  }
  @Input()
  public set decimals(v: number | undefined) {
    if (v == undefined) return;
    this.options.decimals = v;
  }

  @Input() emptyvalue?: number;
  @Input() emptyview?: string;

  @Output() touchSpinChange = new EventEmitter();

  @Input() number?: number = 1;
  @Output() numberChange: EventEmitter<number> = new EventEmitter();

  constructor(private ele: ElementRef<HTMLInputElement>) {}
  ngAfterViewChecked(): void {
    if (this.unit) {
      let index = this.ele.nativeElement.value.indexOf(this.unit);
      if (index < 0) {
        this.ele.nativeElement.value = this.ele.nativeElement.value + this.unit;
      }
    }
    if (
      this.emptyvalue != undefined &&
      this.emptyview != undefined &&
      this.number == this.emptyvalue
    ) {
      this.ele.nativeElement.value = this.emptyview;
    }
  }
  ngAfterViewInit(): void {
    $(this.ele.nativeElement)
      .TouchSpin(this.options)
      .on('change', (e: any) => {
        let value = this.ele.nativeElement.value;
        if (this.unit) {
          let index = value.indexOf(this.unit);
          if (index >= 0) {
            value = value.substring(0, index);
          }
        }
        this.touchSpinChange.emit(value);
        this.numberChange.emit(parseFloat(value));
      });

    $(this.ele.nativeElement).val(this.number ?? 1);
  }
}

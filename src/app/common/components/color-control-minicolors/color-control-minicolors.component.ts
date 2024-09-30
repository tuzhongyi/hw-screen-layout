import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

declare let $: any;

@Component({
  selector: 'color-control-minicolors',
  templateUrl: './color-control-minicolors.component.html',
  styleUrls: ['./color-control-minicolors.component.less'],
})
export class ColorControlMinicolorsComponent implements AfterViewInit {
  @Input() color?: string;
  @Output() colorChange: EventEmitter<string> = new EventEmitter();

  @ViewChild('input')
  element?: ElementRef<HTMLInputElement>;

  ngAfterViewInit(): void {
    if (this.element) {
      $(this.element.nativeElement).minicolors({
        opacity: true,
        format: 'rgb',
      });
    }
  }

  onchange(e: Event) {
    let target = e.currentTarget as HTMLInputElement;
    this.color = target.value;
    this.colorChange.emit(this.color);
  }
  onclick(e: Event) {
    e.stopImmediatePropagation();
    if (this.element) {
      this.element.nativeElement.click();
    }
  }
}

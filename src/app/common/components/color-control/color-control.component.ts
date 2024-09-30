import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Color } from '../../tools/color-tool/color.model';
import { ColorTool } from '../../tools/color-tool/color.tool';

@Component({
  selector: 'color-control',
  templateUrl: './color-control.component.html',
  styleUrls: ['./color-control.component.less'],
})
export class ColorControlComponent implements OnChanges {
  @Input() color?: Color;
  @Output() colorChange: EventEmitter<Color> = new EventEmitter();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['color']) {
      if (this.color) {
        this.value = ColorTool.to.hex.rgb(this.color);
      }
    }
  }

  value = '';

  @ViewChild('input') input?: ElementRef<HTMLInputElement>;

  onchange() {
    if (this.input) {
      this.value = this.input.nativeElement.value;
      this.color = ColorTool.from.hex.rgb(this.value);
      this.colorChange.emit(this.color);
    }
  }

  onclick(e: Event) {
    e.stopImmediatePropagation();
    if (this.input) {
      this.input.nativeElement.click();
    }
  }
}

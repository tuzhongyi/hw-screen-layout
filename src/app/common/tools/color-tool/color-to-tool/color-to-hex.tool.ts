import { Color } from '../color.model';

export class ColorToHexTool {
  private _rgb(color: Color) {
    return `${color.red.toString(16).padStart(2, '0')}${color.green
      .toString(16)
      .padStart(2, '0')}${color.blue.toString(16).padStart(2, '0')}`;
  }
  argb(color: Color) {
    let rgb = this._rgb(color);
    let alpha = Math.round(color.alpha * 255)
      .toString(16)
      .padStart(2, '0');
    return `${alpha}${rgb}`;
  }
  rgb(color: Color) {
    return `#${this._rgb(color)}`;
  }
  rgba(color: Color) {
    let rgb = this._rgb(color);
    let alpha = Math.round(color.alpha * 255)
      .toString(16)
      .padStart(2, '0');
    return `#${rgb}${alpha}`;
  }
}

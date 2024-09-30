import { Color } from '../color.model';
import { ColorToHexTool } from './color-to-hex.tool';

export class ColorToTool {
  rgba(color: Color) {
    return `rgba(${color.red}, ${color.green}, ${color.blue}, ${color.alpha})`;
  }
  rgb(color: Color) {
    return `rgb(${color.red}, ${color.green}, ${color.blue})`;
  }
  hex = new ColorToHexTool();
}

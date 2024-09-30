import { ColorFromHexTool } from './color-from-hex-tool';

export class ColorFromTool {
  rgba(color: string) {
    const rgba = color.replace('rgba(', '').replace(')', '').split(',');
    return {
      red: parseInt(rgba[0]),
      green: parseInt(rgba[1]),
      blue: parseInt(rgba[2]),
      alpha: parseFloat(rgba[3]),
    };
  }
  rgb(color: string) {
    const rgb = color.replace('rgb(', '').replace(')', '').split(',');
    return {
      red: parseInt(rgb[0]),
      green: parseInt(rgb[1]),
      blue: parseInt(rgb[2]),
      alpha: 1,
    };
  }

  hex = new ColorFromHexTool();
}

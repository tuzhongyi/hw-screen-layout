import { ColorFromTool } from './color-from-tool/color-from.tool';
import { ColorToTool } from './color-to-tool/color-to.tool';

export class ColorTool {
  static to = new ColorToTool();
  static from = new ColorFromTool();
}

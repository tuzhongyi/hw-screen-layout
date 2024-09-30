export class ColorFromHexTool {
  rgb(color: string) {
    const hex = color.replace('#', '');
    return {
      red: parseInt(hex.substring(0, 2), 16),
      green: parseInt(hex.substring(2, 4), 16),
      blue: parseInt(hex.substring(4, 6), 16),
      alpha: 1,
    };
  }
  rgba(color: string) {
    const hex = color.replace('#', '');
    if (hex.length === 6) {
      return this.rgb(color);
    }
    if (hex.length === 8) {
      return {
        red: parseInt(hex.substring(0, 2), 16),
        green: parseInt(hex.substring(2, 4), 16),
        blue: parseInt(hex.substring(4, 6), 16),
        alpha: parseInt(hex.substring(6, 8), 16) / 255,
      };
    }
    throw new Error('Invalid color format');
  }
  argb(color: string) {
    const hex = color.replace('#', '');
    if (hex.length === 6) {
      return this.rgb(color);
    }
    if (hex.length === 8) {
      return {
        alpha: parseInt(hex.substring(0, 2), 16) / 255,
        red: parseInt(hex.substring(2, 4), 16),
        green: parseInt(hex.substring(4, 6), 16),
        blue: parseInt(hex.substring(6, 8), 16),
      };
    }
    throw new Error('Invalid color format');
  }
}

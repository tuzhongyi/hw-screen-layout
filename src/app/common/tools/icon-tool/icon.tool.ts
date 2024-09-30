import { ScreenLayoutElementType } from 'src/app/modules/mobile/components/screen-layout-element/screen-layout-element-types/screen-layout-element-types.model';

export class IconTool {
  static ScreenLayoutElementType(type: ScreenLayoutElementType) {
    switch (type) {
      case ScreenLayoutElementType.text:
        return 'mdi mdi-format-text';
      case ScreenLayoutElementType.image:
        return 'mdi mdi-image-area';
      case ScreenLayoutElementType.video:
        return 'mdi mdi-play-circle-outline';
      case ScreenLayoutElementType.animation:
        return 'mdi mdi-file-video';
      case ScreenLayoutElementType.html:
        return 'mdi mdi-language-html5';
      case ScreenLayoutElementType.videolive:
        return 'mdi mdi-video';
      case ScreenLayoutElementType.datetime:
        return 'mdi mdi-calendar-text';
      case ScreenLayoutElementType.notification:
        return 'mdi mdi-note-text';
      case ScreenLayoutElementType.wildcard:
        return 'mdi mdi-code-braces';
      default:
        return '未知';
    }
  }
}

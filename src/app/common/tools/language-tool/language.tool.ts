import { ScreenLayoutElementType } from 'src/app/modules/mobile/components/screen-layout-element/screen-layout-element-types/screen-layout-element-types.model';

export class Language {
  static yyyyMMdd = 'yyyy-MM-dd';
  static yyyyMMddHHmmss = 'yyyy-MM-dd HH:mm:ss';
  static yyyyMMddHHmm = 'yyyy-MM-dd HH:mm';
  static YearMonthDay = 'yyyy年MM月dd日';
  static YearMonthDayHHmmss = 'yyyy年MM月dd日 HH:mm:ss';
  static HH_mm = "HH:mm'";

  static ScreenLayoutElementType(type: ScreenLayoutElementType) {
    switch (type) {
      case ScreenLayoutElementType.text:
        return '文本';
      case ScreenLayoutElementType.image:
        return '图片';
      case ScreenLayoutElementType.video:
        return '视频';
      case ScreenLayoutElementType.animation:
        return '动画';
      case ScreenLayoutElementType.html:
        return 'HTML网页';
      case ScreenLayoutElementType.videolive:
        return '实时摄像机视频';
      case ScreenLayoutElementType.datetime:
        return '日期时间';
      case ScreenLayoutElementType.notification:
        return '滚动公告';
      case ScreenLayoutElementType.wildcard:
        return '通配符';
      default:
        return '未知';
    }
  }
}

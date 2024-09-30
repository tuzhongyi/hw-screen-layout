import { IMediaElementContent } from './media-element-content.interface';

/**	ImageContent (图片项)	*/
export class ImageContent implements IMediaElementContent {
  /**	String	图片地址	M	*/
  Url!: string;
  /**
   * String
   * 拉伸方式
   * Center：居中
   * CenterCrop：按比例居中
   * CenterInside：按比例居中全部显示
   * FitXY：拉伸全屏
   * FitStart：拉伸置顶
   * FitCenter：拉伸居中
   * FitEnd：拉伸置底
   * O
   **/
  ScaleType?: string;
}

import { MediaElement } from '../media-element.model';
import { IMediaElementContent } from './media-element-content.interface';

/**	AnimationContent (动画项)	*/
export class AnimationContent<T extends IMediaElementContent>
  implements IMediaElementContent
{
  /**	MediaElement[]	元素列表	M	*/
  Elements!: MediaElement<T>[];
  /**	Int32	动画类型1：轮播图2：旋转木马	M	*/
  AnimationType!: number;
  /**	Int32	切换间隔，单位：秒	M	*/
  Interval!: number;
}

import { IMediaElementContent } from './media-element-content.interface';

/**	VideoContent (视频项)	*/
export class VideoContent implements IMediaElementContent {
  /**	String	视频地址	M	*/
  Url!: string;
  /**	String	MD5认证码	O	*/
  MD5?: string;
  /**	Int32	重复播放	O	*/
  RepeatType?: number;
}

import { IMediaElementContent } from './media-element-content.interface';

/**	LiveVideoContent (实时摄像机视频项)	*/
export class LiveVideoContent implements IMediaElementContent {
  /**	String	实时摄像机视频地址	M	*/
  Url!: string;
  /**	String	用户名	O	*/
  UserName?: string;
  /**	String	密码	O	*/
  Password?: string;
}
